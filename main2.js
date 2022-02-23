let arr = [{
    value: "a1",
    label: "a1",
  },
  {
    value: "a2",
    label: "a2",
  },
  {
    value: "a3",
    label: "a3",
  }
]
function createSelect(arr, str) {
    let select = document.createElement("select");
    if (Array.isArray(arr)) {
        if (typeof arr[0] === "number" || typeof arr[0] === "string")
            for (let value of arr) {
                let isSelected = str === value;
                let option = new Option(value, value, isSelected, isSelected);
                select.options.add(option);
            }
        else
            for (let e of arr) {
                let value = e.value;
                let isSelected = str === value;
                let option = new Option(e.label, value, isSelected, isSelected);
                select.options.add(option);
            }
    }
    else {
        for (let e of Object.entries(arr)) {
            let value = e[0];
            let isSelected = str === value;
            let option = new Option(e[1], value, isSelected, isSelected);
            select.options.add(option);
        }
    }
    return select;
}
 ;
document.body.append(createSelect(arr));
let arr2 = [1, "value2", "value3", 4, 5];
document.body.append(createSelect(arr2));
let obj = {
    a1: '1',
    a2: '2',
    a3: '3',
};
document.body.append(createSelect(obj));