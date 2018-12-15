import data from '../reducers/ListDisplayTest.json'


export default (state,actions)=>{
console.log("-------------->Inside First Reducer<---------------",actions)
return data;

};