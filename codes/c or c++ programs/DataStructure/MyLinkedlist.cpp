#include <iostream>
using namespace std;

template <class T>
struct node
{
    T data;
    struct node<T> *next, *previous;
    node(T data)
    {
        this->data = data;
        next = previous = nullptr;
    };
};

template <class T>
class MyLinkedlist
{
    void updataTail(node<T> *newnode){
        tail = newnode;
    }
    int lenght = 0;
    struct node<T> *head = nullptr;
    struct node<T> *tail = nullptr;

public:
    MyLinkedlist(){

    }
    MyLinkedlist(T d)
    {
        head = new node<T>(d);
        lenght++;
        tail = head;
    }
    int length(){
        return lenght;
    }
    void add(T data)
    {
        struct node<T> *newnode = new node<T>(data);

        if (head == nullptr)
        {
            head = new node<T>(data);
            lenght++;
            return;
        }

        if (head->next == nullptr)
        {
            head->next = newnode;
            newnode->previous = head;
            tail = newnode;
        }
        else
        {
            tail->next = newnode;
            newnode->previous = tail;
            tail = newnode;
        }
        lenght++;
    }

    friend ostream &operator<<(ostream &output, const MyLinkedlist &D)
    {
        if(D.head==nullptr){
            output<<"Linkedlist is empty!!";
            return output;
        }
        T data = D.head->data;
        if(D.head->next==nullptr){
            output<<"[ "<<data<<" ]";
            return output;
        }
        struct node<T> *temp = D.head->next;
        output << "[" << data << ",";
        while (temp->next != nullptr)
        {
            output << " " << temp->data << ",";
            temp = temp->next;
        }
        output << " " << temp->data << "]";
        return output;
    }

    bool deleteNode(){
        if(lenght==0){
            return false;
        }
        if(tail==nullptr){
            return false;
        }else{
            tail = tail->previous;
            free(tail->next);
            tail->next = nullptr;
        }
        lenght--;
        return true;
    }

    T get(int n = 0){
        int count = n-1;
        if(head==nullptr){
            // cout<<"list is empty"<<endl;
            throw out_of_range("list is empty");
        }
        struct node<T> *temp = head;
        while (count-->0)
        {
            temp= temp->next;
        }
        return temp->data;
    }

    bool deleteNode(T key){
        if(lenght==0){
            return false;
        }else if(head==tail && head->data==key){
            free(head);
            free(tail);
            head = tail = nullptr;
            lenght--;
            return true;
        }
        struct node<T> *temp = head;
        while(temp->data!=key){
            if(temp->next==nullptr){
                break;
            }
            temp = temp->next;
        }
        if(temp==tail){
            tail = temp->previous;
            if(tail==head){
                head=tail;
            }
            free(tail->next);
            tail->next = nullptr;
            lenght--;
        }else if(temp==head){
            head = head->next;
            if(head==tail){
               tail=head;
            }
            free(head->previous);
            head->previous = nullptr;
            lenght--;
        }else{
            temp = temp->previous;
            temp->next = temp->next->next;
            temp->next->previous = temp;
            lenght--;
        }
        return true;
    }
};

int main()
{
    MyLinkedlist<int> prashant;
    prashant.add(78);
    cout<<prashant<<endl;

    return 0;
}
