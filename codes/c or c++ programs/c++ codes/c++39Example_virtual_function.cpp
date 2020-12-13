#include<iostream>
#include<cstring>
using namespace std;

class cwh{

    protected:
        string title;
        float rating;
    public:
        cwh(string s,float r){
            title = s;
            rating  = r;
        }
        virtual void display(){}
};

class CWHvideo : public cwh{

    int videoLength;
    public:
        CWHvideo(string s,float r, int wc) : cwh(s,r){
            videoLength = wc;
        }
        void display(){
            cout<<"this is a amazing video with title "<<title<<endl;
            cout<<"ratingS : "<<rating<<" out of 5 sart"<<endl;
        }

};
class CWHText : public cwh{

    int word;
    public:
        CWHText(string s,float r, int wc) : cwh(s,r){
            word = wc;
        }
        void display(){
            cout<<"this is a amazing video with title "<<title<<endl;
            cout<<"ratingS : "<<rating<<" out of 5 sart"<<endl;
            cout<<"no. of words in this text tutorial "<<word<<" out of 5 sart"<<endl;
        }

};

int main(){

    string title;
    float rating,vlen;
    int words;

    //for code with harry video

    title = "video text";
    vlen = 4.50;
    rating = 5.9;

    CWHvideo video(title,rating,vlen);
    video.display(); 

    //for code with harry video

    title = "video1 text";
    vlen = 5.50;
    rating = 4.9;

    CWHText video1(title,rating,vlen);
    video1.display(); 
 
    cwh *tut[2];
    tut[0] = &video;
    tut[1] = &video1;

    tut[0]->display();
    tut[1]->display();
    return 0;
}

// rules for virtual functions
// 1. they connot be static
// 2. they are accessed by object pointer
// 3. Virtual function can be a friend of another class.
// 4. A virtual function in base class migth not be used 