var Calculations = /** @class */ (function () {
    function Calculations() {
        this.getInputs();
    }
    Calculations.prototype.getInputs = function () {
        var _this = this;
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.button = document.querySelector(".createInputs");
        this.error = document.querySelector(".error");
        this.inputsDiv = document.querySelector(".inputs");
        this.sum = document.querySelector("#sum");
        this.avg = document.querySelector("#avg");
        this.min = document.querySelector("#min");
        this.max = document.querySelector("#max");
        this.button.addEventListener('click', function () { return _this.createInputs(); });
    };
    Calculations.prototype.createInputs = function () {
        var _this = this;
        this.inputsDiv.innerHTML = '';
        var InputsNumber = +this.numberOfInputs.value;
        if (InputsNumber < 1 || InputsNumber >= 20) {
            this.error.textContent = 'Inputs number must be between 1 and 20!';
            this.error.classList.remove('hidden');
        }
        else {
            this.error.classList.add('hidden');
            for (var i = 0; i < InputsNumber; i++) {
                var inputs = document.createElement('div');
                inputs.classList.add('inputsDiv');
                var inputElement = document.createElement('input');
                inputElement.dataset.number = "number" + i;
                inputElement.classList.add('input-number');
                inputElement.setAttribute('type', 'number');
                inputElement.addEventListener('input', function () { return _this.calculate(); });
                var deleteButton = document.createElement('button');
                deleteButton.textContent = "X";
                deleteButton.addEventListener('click', function (e) { return _this.deleteInput(e); });
                inputs.appendChild(inputElement);
                inputs.appendChild(deleteButton);
                this.inputsDiv.appendChild(inputs);
            }
        }
    };
    Calculations.prototype.calculate = function () {
        var inputsArray = document.querySelectorAll('.input-number');
        var valuesArray = [];
        inputsArray.forEach(function (element) {
            var castElement = element;
            if (castElement.value != '') {
                valuesArray.push(+castElement.value);
            }
        });
        var valuesNumber = valuesArray.length;
        var sum = 0;
        valuesArray.forEach(function (element) {
            sum += element;
        });
        var avg = sum / valuesNumber;
        var min = Math.min.apply(Math, valuesArray);
        var max = Math.max.apply(Math, valuesArray);
        this.showCalculations(sum, avg, min, max);
    };
    Calculations.prototype.deleteInput = function (e) {
        var element = e.target.parentElement;
        element.remove();
    };
    Calculations.prototype.showCalculations = function (sum, avg, min, max) {
        this.sum.value = sum.toString();
        this.avg.value = avg.toString();
        this.min.value = min.toString();
        this.max.value = max.toString();
    };
    return Calculations;
}());
var obj = new Calculations();
