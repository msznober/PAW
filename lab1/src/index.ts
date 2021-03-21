class Calculations {

  inputsDiv: HTMLDivElement;
  numberOfInputs: HTMLInputElement;
  button: HTMLButtonElement;
  error: HTMLSpanElement;

  sum: HTMLInputElement;
  avg: HTMLInputElement;
  min: HTMLInputElement;
  max: HTMLInputElement;

  constructor() {
    this.getInputs();
  }

  getInputs() {
    this.numberOfInputs = document.querySelector("#numberOfInputs");
    this.button = document.querySelector(".createInputs");
    this.error = document.querySelector(".error");
    this.inputsDiv = document.querySelector(".inputs");

    this.sum = document.querySelector("#sum");
    this.avg = document.querySelector("#avg");
    this.min = document.querySelector("#min");
    this.max = document.querySelector("#max");

    this.button.addEventListener('click', () => this.createInputs())


  }

  createInputs(): void {
    this.inputsDiv.innerHTML = '';
    const InputsNumber = +this.numberOfInputs.value;
    if (InputsNumber < 1 || InputsNumber >= 20) {
      this.error.textContent = 'Inputs number must be between 1 and 20!'
      this.error.classList.remove('hidden');
    }
    else {
      this.error.classList.add('hidden');
      for (let i = 0; i < InputsNumber; i++) {
        const inputs = document.createElement('div');
        inputs.classList.add('inputsDiv');
        const inputElement = document.createElement('input');

        inputElement.dataset.number = `number${i}`;
        inputElement.classList.add('input-number');
        inputElement.setAttribute('type', 'number');
        inputElement.addEventListener('input', () => this.calculate());

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', (e) => this.deleteInput(e));

        inputs.appendChild(inputElement);
        inputs.appendChild(deleteButton);
        this.inputsDiv.appendChild(inputs);

      }
    }
  }

  calculate(): void {
    const inputsArray = document.querySelectorAll('.input-number');
    const valuesArray: number[] = [];

    inputsArray.forEach(element => {
      const castElement = element as HTMLInputElement;

      if (castElement.value != '') {
        valuesArray.push(+castElement.value);
      }
    })

    const valuesNumber = valuesArray.length;
    let sum = 0;

    valuesArray.forEach(element => {
      sum += element;
    });

    const avg = sum / valuesNumber;
    const min = Math.min(...valuesArray);
    const max = Math.max(...valuesArray);

    this.showCalculations(sum, avg, min, max);
  }

  deleteInput(e): void {
    const element: HTMLDivElement = e.target.parentElement;
    element.remove();
  }

  showCalculations(sum: number, avg: number, min: number, max: number): void {
    this.sum.value = sum.toString();
    this.avg.value = avg.toString();
    this.min.value = min.toString();
    this.max.value = max.toString();
  }
}

const obj = new Calculations();