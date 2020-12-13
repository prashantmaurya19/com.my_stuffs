#include<iostream>
using namespace std;



int main(){
    // #######float double and long litrals#######
    /* f/F for float
        l/L for long
        double is by default */
    
    // ########## Reference variable #############
    float x = 89.9;
    float & y = x;
    cout<<x<<" "<<y;
    
    // ########## typecasting #############

    int num = 78;
    float f = (float)num;
    cout<<f;


    return 0;
}