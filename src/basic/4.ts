function showMessage(message: string):void {
  console.log(message);
}

function calc(num1: number, num2: number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

showMessage('Hello');
calc(2, 505);
customError();
