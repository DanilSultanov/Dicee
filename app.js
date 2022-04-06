// Random number
//  let random1 = Math.floor(Math.random() * 6 + 1);
// //  console.log( random1);

//  let random2 = Math.floor(Math.random() * 6 + 1);
//  console.log( random2 );


const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')


//  img1.src = `images/dice${random1}.png`
//   img2.src = `images/dice${random2}.png`



  const h1 = document.querySelector('.h1')


//   if(random1 > random2){
//     //   console.log('1 Player Win')
//       h1.textContent = '1 Player Win'
//   }else if(random1 < random2){
//     // console.log('2 Player Win')
//     h1.textContent = '2 Player Win'
//   }else if(random1 == random2){
//     //   console.log('Draw')
//       h1.textContent = 'Draw'
//   }






  const button = document.querySelector('.button')


  button.addEventListener('click', () => {
    //   Random Number
    let random1 = Math.floor(Math.random() * 6 + 1);
     let random2 = Math.floor(Math.random() * 6 + 1);
    //  Random Img
    img1.src = `images/dice${random1}.png`
    img2.src = `images/dice${random2}.png`
    //   If Else
    if(random1 > random2){
          h1.textContent = '1 Player Win'
      }else if(random1 < random2){
        h1.textContent = '2 Player Win'
      }else if(random1 == random2){
          h1.textContent = 'Draw'
      }
  })

