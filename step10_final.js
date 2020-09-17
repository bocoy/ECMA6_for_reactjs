/*
    React �� ���� ECMA6 ��ü ����
*/

//1. let ���ǵ� ��{} �ȿ����� ����Ҽ� �ְ� �Ҷ�  
let myName="�豸��";

//2. const ���� �Ҵ�Ǹ� �� �Ҵ��� �Ұ��� ����� �����Ҷ�
const pi=3.14159;

//3. Template Literal (back tick �� �̿���)
function getGreet(){
    return "���� ��ħ~";
}
let result=`Hello ${myName} ! ${getGreet()}`;
console.log(result);

//4. Default Parameter
function printInfo(num=0, name="�̸�"){
    console.log(`��ȣ:${num} �̸�:${name}`);
}

//5. Arrow Function
function sum(num1, num2){
    return num1+num2;
}
const sum2=(num1, num2)=>{return num1+num2;}
const sum3=(num1, num2)=>num1+num2;

//6. Destructuring �������� / Destructuring Assignment ����ȭ �Ҵ�
const nums=[10, 20, 30];
const [x, y, z]=nums;
const [,,last]=nums; //�տ� �ΰ��� ���� �����ϱ�

const mem={num:1, name:"�豸��", isMan:true};
// const num=mem.num;
// const name=mem.name;
// const addr=mem.isMan;

//���� 3���� ��ü�ϴ� ǥ���� (��ü ���� ����)
const {num, name, addr}=mem;

//7. ������ ��ü ���ͷ�
const brand="Hyundai";
const color="silver";
const drive=function(){
    console.log("�޷���!");
};
const myCar={brand, color, drive};

//8. Spread Operator

const names=["�豸��","�ذ�","������"];
const msgs=["�ȳ�","���߳�","��¼��"];

const result2=[...names, ...msgs];

function print(...args){
    //args �� �迭�̴�.
    console.log(args);
}
//�Լ��� ȣ���ϸ鼭 ������ ������ �������� ���� �� �� �ִ�.
print("�ϳ�", "�ο�","����");

//9. class
class Car{
    constructor(name){
        this._name=name;
    }
    drive(){
        console.log(this._name+" �� �޷���");
    }
}

//Ŭ���� ���
class SuperCar extends Car{
    driveFast(){
        console.log("���� �޷���");
    }
}

//Ŭ������ �̿��� ��ü ����
const car1=new Car();
const car2=new SuperCar();
car1.drive();
car2.drive();
car2.driveFast();

//static(����) �޼ҵ�, �ʵ�
class myUtil{
    static version="1.0";
    static write(){
        console.log("�ʱ⸦ �ؿ�");
    }
}
console.log(myUtil.version); //static �ʵ� ����
myUtil.write(); //static �޼ҵ� ȣ��
console.log("End!");

