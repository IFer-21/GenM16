const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(personas);

personas.splice(1, 1);
console.log(personas);

/*personas.splice(2,1)
console.log(personas);

personas.unshift("Luis");
console.log(personas);

personas.push("Iker")
console.log(personas);

console.log(personas.indexOf("Iker"));

personas.splice("Iker")

console.log(personas);*/

personas.unshift(personas.splice(1,1));
console.log(personas);