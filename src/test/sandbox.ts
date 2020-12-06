import { CPP14Interpreter } from '../interpreter/CPP14/CPP14Interpreter';
import { Java8Interpreter } from '../interpreter/Java8/Java8Interpreter';
import { Python3Interpreter } from '../interpreter/Python3/Python3Interpreter';
//tslint:disable
const t = String.raw`
#include<stdio.h>
int main(){
  int n = 3;

  int arr[5] = {1, 2, 3};//配列変数

  int* ptr = &arr[2];//ポインタ変数
  *ptr = 5;

  //動的メモリ確保
  char* d_arry = malloc(sizeof(char) * 3);

  //二次元ポインタ配列の動的メモリ配列
  short* pd_arr[2];
  pd_arr[0] = malloc(sizeof(short) * 2);
  pd_arr[1] = malloc(sizeof(short) * 2);

  free(pd_arr[0]);//メモリの解放

  printf("Hello,world!\n");//標準出力

  return 0;
}`;
const i = new CPP14Interpreter();
const ret = i.execute(t);
const out = i.getStdout();
console.log(ret);
console.log(out);
