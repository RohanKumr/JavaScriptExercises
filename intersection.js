
const circlesCords = [];

document.addEventListener('click', (e) => {

  const allCircles = document.querySelectorAll('.circle');

  if(allCircles.length == 2) {
    allCircles.forEach((c) => {
      document.body.removeChild(c);
      circlesCords.shift()
    })
  }


  // click
  const x = e.clientX;
  const y = e.clientY;

  //circle
  const circle = document.createElement('div');
  const radius = Math.floor(Math.random() * 100);
  const diameter = radius * 2;

  // circle styles
  circle.classList.add('circle')
  circle.style.position = "absolute";
  circle.style.top = y - radius + "px";
  circle.style.left = x - radius + "px";
  circle.style.borderRadius = "50%"
  circle.style.border = "1px solid red"
  circle.style.height = diameter + "px"
  circle.style.width = diameter + "px"

  circlesCords.push({ x, y, radius })

  //Check Intersection
  if(circlesCords.length == 2) {
    const { x: x1, y: y1, radius: r1 } = circlesCords[0]
    const { x: x2, y: y2, radius: r2 } = circlesCords[1]
    console.log(x1, y1, x2, y2, r1, r2);


    const a = x1 - x2;
    const b = y1 - y2;

    const d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);

    if(d < (r1 + r2)) {
      const minDistance = Math.max(r1, r2) - Math.min(r1, r2);
      if(d < minDistance) console.log('overlapping')
      else console.log('intersecting')
    }
    else console.log('not intersecting');
  }

  // circle append
  document.body.appendChild(circle);
}) 