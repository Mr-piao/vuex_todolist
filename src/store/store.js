import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state : {
        message : 'this message from Store ',
        todoList: [
            {id : 1, todo : '学习VUE',done : true},
            {id : 2, todo : '学习laravel',done : true},
            {id : 3, todo : '学习webpack',done : false}
        ]
    },   
	// mutations 为唯一可以操作state 数据的方法
    // 下面我们定义两个方法，一个添加todoList，一个删除todoList
    mutations: {        // 接收两个参数，state 和需要操作的数据payload
        addTodoList (state, payload){        
            state.todoList.push({id:state.todoList.length + 1,todo:payload,done:false})
        },
        deleteTodo(state,payload){
			
            state.todoList.splice(payload,1)
        }
    },
    computed : {
		todoList(){                
			// 这里我们获取state的数据进行渲染
			return store.state.todoList
		}
	}
 
})
export default store;