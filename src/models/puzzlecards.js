import request from '../utils/request';

export default {
    namespace: 'puzzlecards',
    state: {
        data : [],
        counter: 1,
    },
    effects: {
        *queryInitCards (_, { call, put }) {
            localStorage.clear('posts');
            console.log('QureyInitCards');
            const postNum = Math.floor(Math.random()*100);
            // const endPointURI = '/dev/posts/'+postNum;
            let preData = localStorage.getItem('posts');
            if (!preData) {
                console.log('post');
                const endPointURI = 'dev/poosts/1';
                const newCard = yield call(request, endPointURI);
                yield put ({
                    type: 'addPosts',
                    payload: newCard,
                });
            } else {
                console.log('cache');
                yield put ({
                    type: 'initPosts',
                    payload: JSON.stringify(preData),
                });
            }
            
        },

        *buttonPost ({payload}, { call, put }) {
            console.log('buttonPost', payload);
            const endPointURI = '/dev/posts/';
            const newCard = yield call(request, endPointURI, { method:'post', data: {id: 1}});
            console.log('newcard', newCard.length);
            yield put ({
                type: 'addNewCard',
                payload: newCard,
            });
        }
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextData = state.data.concat(newCard);
            return ({
                data: nextData,
            });
        },
        // payload 是一个对象，不是数组
        addPosts(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            let preData = localStorage.getItem('posts');
            console.log('pre', preData);
            let newData;
            if (!preData) {
                newData = [newCard];
                console.log('new1', newData);
            }
            else {
                newData = preData.concat(newCard);
                console.log('new2', newData);
            }
            console.log('newData', newData);
            localStorage.setItem('posts', JSON.stringify(newData));
            return ({
                data: newData,
                counter: nextCounter,
            });
        },
        // allPosts 是一个数组
        initPosts(state, { payload: allPosts }) {
            const nextCounter = state.counter + 1; 
            return ({
                data: allPosts,
                counter: nextCounter,
            })
        }

    }
};