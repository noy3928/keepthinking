import { firestore } from "../../firebase";
const dic_db = firestore.collection("Dictionary");

const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";
const LOADED = "dic/LOADED";

const initialState = {
  list: [
    {
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어.",
      exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어.",
      exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
    {
      word: "ㅎ1ㅎ1",
      desc: "히히를 변형한 단어.",
      exam: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
    },
  ],
  is_loaded: false,
};

///사실 load는 처음에 어떤 데이터를 줄 필요가 없기는 하다.
export const loadDic = (dic) => {
  return { type: LOAD, dic };
};

//타입 다음에 나오는 것은 어떤 데이터를 가지고 올 것이다에 관한 내용이다.
export const createDic = (dic) => {
  return { type: CREATE, dic };
};

export const deleteDic = (dic) => {
  return { type: DELETE, dic };
};

export const updateDic = (dic) => {
  return { type: UPDATE, dic };
};

export const isLoaded = (loaded) => {
  return { type: LOADED, loaded };
};

// export const loadState = (dic) => {
//   // 액션을 리턴합니다! (액션 생성 함수니까요. 제가 너무 당연한 이야기를 했나요? :))
//   return {
//     type: LOAD,
//     data: dic,
//   };
// };

export const addDic = (dic) => {
  // 액션을 리턴합니다! (액션 생성 함수니까요. 제가 너무 당연한 이야기를 했나요? :))
  return {
    type: CREATE,
    dic,
  };
};

//리덕스에서 파이어 베이스 데이터를 가져와서 활용하기.
export const loadDicFB = () => {
  return function (dispatch) {
    //데이터를 다 가지고 오고싶을 경우.
    dic_db.get().then((docs) => {
      let dic_data = [];

      docs.forEach((doc) => {
        if (doc.exists) {
          dic_data = [...dic_data, { id: doc.id, ...doc.data() }];
        }
      });
      console.log(dic_data);
      dispatch(loadDic(dic_data));
    });
  };
};

export const addDicFB = (dic) => {
  return function (dispatch) {
    let dic_data = { word: dic.word, desc: dic.desc, exam: dic.exam };

    // dispatch(isLoaded(false));

    dic_db.add(dic_data).then((docRef) => {
      dic_data = { ...dic_data, id: docRef.id };
      dispatch(createDic(dic_data));
      // dispatch(isLoaded(true));
    });
  };
};

export const deleteDicFB = (index) => {
  return function (dispatch, getState) {
    const _dic_data = getState().dic.list[index];

    dispatch(isLoaded(false));

    if (!_dic_data.id) {
      return;
    }

    dic_db
      .doc(_dic_data.id)
      .delete()
      .then((docRef) => {
        dispatch(deleteDic(index));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(isLoaded(true));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dic/LOAD": {
      if (action.dic.length > 0) {
        return { list: action.dic, is_loaded: true };
      }
      return state;
    }

    //액션을 통해서 넘어온 값을 새롭게 저장한다. 액션에서 bucket이라는 변수명으로 데이터가 넘어왔다.
    case "dic/CREATE": {
      const new_dic_list = [...state.list, action.dic];
      return { list: new_dic_list }; //리턴을 이렇게 해준 것은 기존의 입력방식을 맞춰주기 위한 것이다.
    }

    case "bucket/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
