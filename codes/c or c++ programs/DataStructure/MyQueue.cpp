#include<iostream>
#include "linked.h"
using namespace std;

template<class T>
class MyQueue{
    private:
        MyLinkedlist<T> link;
    public:
    MyQueue(){}
    MyQueue(T value){
        link.add(value);
    }
    void push(T value){
        link.add(value);
    }
    T pop(){
        if(link.getlength()==0){
            throw out_of_range("queue is empty!");
        }
        T node = link.get();
        link.deleteNode(link.get());
        return node; 
    }
    T peek(){
        try
        {
            return link.get();
        }
        catch(const std::exception& e)
        {
            std::cerr << e.what() << '\n';
        }
        return link.get(); 
    }
    int size(){
        return link.getlength();
    }
    friend ostream &operator<<(ostream &output, const MyQueue &D){
        output<<D.link;
        return output;
    }
};

int main(){
    MyQueue<string> q;
    q.push("badass");
    q.push("hero");
    q.push("saitama");
    cout<<q.peek()<<endl;
    cout<<q.pop()<<endl;
    cout<<q<<endl;
    return 0;
}