// DIsini obj memiliki property square dengan nilai adalah
// fungsi pengkuadratan. Pemanggilan property *square* secara tidak
// langsung serupa dengan pemanggilan method suatu object
let obj = { square: function(x) { return x*x; } };

console.log(obj.square(16));