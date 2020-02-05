// 用于负责导出所有的组件
// 比较方便统一导出

//方式一：
// import TodoHeader from './TodoHeader'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'
// export {
//     TodoHeader,
//     TodoInput,
//     TodoList
// }

//方式二：
export { default as TodoHeader } from './TodoHeader'
export { default as TodoInput } from './TodoInput'
export { default as TodoList } from './TodoList'
export { default as Like} from './Like'
export { default as Counter} from './React-hooks'
export { default as Count} from './ContextCount'