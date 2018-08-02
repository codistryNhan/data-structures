let  data = [[45, 12],[55,21],[19, -2],[104, 20]];

function demo(data) {
  data.map( (data) => {
    [a, b] = data;
    console.log(a);
    console.log(b);
  })
}

demo(data);
