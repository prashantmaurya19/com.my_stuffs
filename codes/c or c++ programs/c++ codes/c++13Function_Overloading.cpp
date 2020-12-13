#include<iostream>
using namespace std;

int volume(int a){
    return (a*a*a);
}

int volume(int a,int b,int c){
    return (a*b*c);
}



int main(){

    cout<<"volume cube side(4) = "<<volume(4)<<endl;
    cout<<"volume cudoid side(6,5,4) = "<<volume(6,5,4)<<endl;


    return 0;
}