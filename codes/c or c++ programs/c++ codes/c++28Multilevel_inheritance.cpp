#include<iostream>
#include<string>
using namespace std;

class Student{

    protected:
        int roll_number;
    
    public:
        void set_roll_number(int a){
            roll_number = a;
        }
        void get_roll_number(){
            cout<<"your roll no. = "<<roll_number<<endl;
        }

};

class Exam : public Student{
    protected:
        float math,physics;
    public:
        void setMarks(float a, float b){
            math  = a;
            physics = b;
        }
        void getMarks(){
            cout<<"maths's marks = "<<math<<"\nphysics's marks = "<<physics<<endl;
        }
};

class result : public Exam{
    float percentage;

    public:
        void display(){
            get_roll_number();
            getMarks();
            cout<<"your percentage is "<<(math + physics)/2<<"%"<<endl;
        }


};

int main(){
    result nishant;
    nishant.set_roll_number(123);
    nishant.setMarks(99.9,90.9);
    nishant.display();
    
    return 0;
} 