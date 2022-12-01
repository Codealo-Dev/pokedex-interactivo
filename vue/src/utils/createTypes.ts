export function createTypes(types: any){
  let typeLi: any = []
  types.forEach(function(type: any){
    typeLi.push(type['type']['name']);
  })
  return typeLi;
}