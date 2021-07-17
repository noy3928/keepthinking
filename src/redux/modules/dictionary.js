import { firestore } from "../../firebase";
import history from "../../history";
const dic_db = firestore.collection("Dictionary");

const LOAD = "dic/LOAD";
const CREATE = "dic/CREATE";
const DELETE = "dic/DELETE";
const UPDATE = "dic/UPDATE";
const LOADED = "dic/LOADED";
// const CHECKPATH = "dic/CHECKPATH";

c;

///사실 load는 처음에 어떤 데이터를 줄 필요가 없기는 하다.
export const loadDic = (dic) => {
  return { type: LOAD, dic };
};

//타입 다음에 나오는 것은 어떤 데이터를 가지고 올 것이다에 관한 내용이다.
export const createDic = (dic) => {
  return { type: CREATE, dic };
};

export const deleteDic = (dic_id) => {
  return { type: DELETE, dic_id };
};

export const updateDic = (dic) => {
  return { type: UPDATE, dic };
};

export const isLoaded = (loaded) => {
  return { type: LOADED, loaded };
};

// export const checkpath = (path) => {
//   return { type: CHECKPATH, path };
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
      // console.log("로드생성함수에서의 데이터", dic_data);
      dispatch(loadDic(dic_data));
    });
  };
};

export const addDicFB = (dic) => {
  return function (dispatch) {
    let dic_data = {
      word: dic.word,
      desc: dic.desc,
      exam: dic.exam,
      pass: dic.pass,
    };

    // dispatch(isLoaded(false));

    dic_db.add(dic_data).then((docRef) => {
      dic_data = { ...dic_data, id: docRef.id };
      // console.log("--------단어추가 액션함수가 시작됩니다.");
      dispatch(createDic(dic_data));
      // dispatch(isLoaded(true));
      // console.log("--------단어추가 액션함수가 끝났습니다.");
    });
  };
};

export const deleteDicFB = (dic_id) => {
  return function (dispatch, getState) {
    // const _dic_data = getState().dic.list[dic];

    dispatch(isLoaded(false));

    // if (!_dic_data.id) {
    //   return;
    // }

    dic_db
      .doc(dic_id)
      .delete()
      .then((docRef) => {
        // console.log("이제 삭제액션 함수가 호출됩니다.");
        dispatch(deleteDic(dic_id));
        // console.log("삭제액션함수 호출이 끝났습니다");
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(isLoaded(true));
    // history.push("/");
  };
};

// export const getPath = (page) => {
//   return function (dispatch) {
//     dispatch(checkpath(page));
//   };
// };

// Reducer
export default function reducer(state = initialState, action = {}) {
  // console.log("케이스 바깥에서의 데이터", state);
  switch (action.type) {
    // do reducer stuff
    case "dic/LOAD": {
      if (action.dic.length > 0) {
        // const actiondata = { list: action };
        // const abc = { list: action.dic };
        // console.log("로드함수 안에서의 데이터", abc);
        // console.log("액션데이터", actiondata);
        return { list: action.dic };
      }

      return state;
    }

    //액션을 통해서 넘어온 값을 새롭게 저장한다. 액션에서 bucket이라는 변수명으로 데이터가 넘어왔다.
    case "dic/CREATE": {
      // console.log("생성할 때 액션데이터", action.dic);
      const new_dic_list = [...state.list, action.dic];
      // console.log("생성하면서 새로만들어진 데이터", new_dic_list);
      return { list: new_dic_list }; //리턴을 이렇게 해준 것은 기존의 입력방식을 맞춰주기 위한 것이다.
    }

    case "dic/DELETE": {
      // console.log("삭제 케이스에서의 데이터", state);
      const dic_list = state.list.filter((l, idx) => {
        if (l.id !== action.dic_id) {
          return l;
        }
      });
      // const asd = { ...state, list: dic_list };
      // // const ddd = { list: dic_list, ...state };
      // // console.log("1번", asd);
      // // console.log("2번", ddd);
      // console.log("리듀서에서 삭제되었습니다");
      return { list: dic_list };
    }

    case "dic/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    // case "dic/CHECKPATH": {
    //   return { path: action.path };
    // }

    default:
      return state;
  }
}
