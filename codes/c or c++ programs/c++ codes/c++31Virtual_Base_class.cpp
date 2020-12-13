#include<iostream>
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

class test: virtual public  Student{
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

class sport : virtual public Student{

    protected:
        float score;
    public:
        void setScore(float a){
            score = a;
        }
        void getScore(){
            cout<<"your score is "<<score<<endl;
        }

};

class result : virtual public sport, virtual public test{
    private:
        float result;
    public:
        void display(){
            result = math + physics + score;
            get_roll_number();
            getMarks();
            getScore();
            cout<<"your result is "<<result<<endl;
        }
};

int main(){

    result prashant;
    prashant.set_roll_number(123);
    prashant.setMarks(99,100);
    prashant.setScore(99);
    prashant.display();

    return 0;
}