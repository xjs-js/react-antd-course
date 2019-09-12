import request from '../utils/request';

export default {
    namespace: 'cards',
    state: {
        cardList: [
            {
                name : 'umi',
                desc : '极快的类 Next.js 的 React 应用框架',
                url  : 'https://umijs.org' 
            }
        ],
        statistic: [
            [{ genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 1150 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 },],
        ],
    },
    effects: {
        *queryList (_, { call, put }) {
            console.log('querylist')
            yield put ({
                type: 'initCard',
            });
        }
    },
    reducers: {
        initCard(state, {payload: newCard}) {
            console.log('init Card');
            const listData = [{
                id   : 1,
                name : 'umi',
                desc : '极快的类 Next.js 的 React 应用框架',
                url  : 'https://umijs.org'
              },
              {
                  id : 2,
                name : 'antd',
                desc : '一个服务于企业级产品的设计体系',
                url  : 'https://ant.design/index-cn'
              },
              {
                  id : 3,
                name : 'antd-pro',
                desc : '一个服务于企业级产品的设计体系',
                url  : 'https://ant.design/index-cn'
              }
              ];
              console.log('initCard')
            return ({
                ...state,
                cardList: listData,
            });
        },

        addOne(state, {payload: values}) {
            console.log('addOne', values);
            values.id = state.cardList[state.cardList.length-1].id + 1;
            return ({
                ...state,
                cardList: state.cardList.concat([values]),
            });
        },

        getStatistic(state, {payload: id}) {
            return ({
                ...state,
                statistic: state.statistic,
            })
        }
    }
};