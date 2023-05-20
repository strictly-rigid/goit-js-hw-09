
const refs = {
  form: document.querySelector('form'),
}



function createPromise(position, delay) {
 return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onFormSubmit = (event) => {
  event.preventDefault();

  const {delay, step, amount} = event.target.elements;
  let delayNum = Number(delay.value)

  for (let i = 1; i <= Number(amount.value); i += 1) {
      
      createPromise(i, delayNum)
        .then(({ position, delay }) => {
              console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
              console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        delayNum += Number(step.value);
      }
};

refs.form.addEventListener('submit', onFormSubmit)