let result=[];
let rooms=[];
let k=0, m=0;




var same =  data.filter(function(hero) {
    return hero.branch == "cse" || hero.branch == "cst"; });
  var diff =  data.filter(function(hero) {
    return hero.branch == "ece" || hero.branch == "mech"; });
    





  for(i=0;i<arr.length-1;i++){
    m=m+5;
      for(let j=k;j<m;j++){
      let a={...same[j].toObject()};
      k++;
      const mer=merge(a,arr[i])
      result.push(mer); }}
 m=0;k=0;
 for(i=0;i<arr.length-1;i++){
    m=m+5;
      for(let j=k;j<m;j++){
      let a={...diff[j].toObject()};
      k=k+1;
      let b=arr[i]
      const mer=merge(a,b);
      result.push(mer);}} 