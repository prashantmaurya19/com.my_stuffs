#include<bits/stdc++.h>
using namespace std;

template<class T>
class LinkedList{
private:
  struct Node{
  public:
      T data;
      struct Node *next = nullptr;
      Node(T data){
        this->data = data;
      }
  };

  struct Node *head = nullptr,*tail = nullptr;
  int length = 0;
public:
  LinkedList(){

  }

  LinkedList(T data) {
    this->head = new Node(data);
    this->tail = this->head;
    this->length++;
  }



  void push(int index,T data){
    if(index>=this->length){
      return;
    }
    struct Node *temp = this->head;
    index--;
    while(index!=0){
      index--;
      temp = temp->next;
    }
    if(temp->next==nullptr){
      temp->next = new Node(data);
      this->tail = temp->next;
    }else{
      struct Node *temp1 = temp->next;
      temp->next = new Node(data);
      temp->next->next = temp1;
    }
    this->length++;
  }

  void push_back(T data){
    this->tail->next = new Node(data);
    this->tail =this->tail->next;
    this->length++;
  }

  T operator [](int index){
      struct Node *temp = this->head;
      if(index>=this->length){
          throw "out of Bound";
      }
      while(index!=0){
        index--;
        temp = temp->next;
        if(temp==nullptr){
          break;
        }
      }
      return temp->data;
  }

  friend ostream &operator<<(ostream &output, const LinkedList &D)
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
      struct Node *temp = D.head->next;
      output << "[" << data << ",";
      while (temp->next != nullptr)
      {
          output << " " << temp->data << ",";
          temp = temp->next;
      }
      output << " " << temp->data << "]";
      return output;
  }

};

// doubly linkedlist
template<class T>
class DoublyLinkedList{
private:
  struct Node{
  public:
      T data;
      struct Node *next = nullptr,*previous=nullptr;
      Node(T data){
        this->data = data;
      }
  };

  struct Node *head = nullptr,*tail = nullptr;
  int length = 0;
public:
  DoublyLinkedList(){

  }

  DoublyLinkedList(T data) {
    this->head = new Node(data);
    this->tail = this->head;
    this->length++;
  }



  void push(int index,T data){
    if(head==nullptr){
      this->head = new Node(data);
      this->tail = this->head;
      this->length++;
      return;
    }
    if(index>=this->length){
      return;
    }
    struct Node *temp = this->head;
    index--;
    while(index!=0){
      index--;
      temp = temp->next;
    }
    if(temp->next==nullptr){
      temp->next = new Node(data);
      temp->next->previous = temp;
      this->tail = temp->next;
    }else{
      struct Node *temp1 = temp->next;
      temp->next = new Node(data);
      temp->next->previous = temp;
      temp->next->next = temp1;
      temp1->previous = temp->next;
    }
    this->length++;
  }

  void push_back(T data){
    if(head==nullptr){
      this->head = new Node(data);
      this->tail = this->head;
      this->length++;
      return;
    }
    this->tail->next = new Node(data);
    this->tail->next->previous = this->tail;
    this->tail = this->tail->next;
    this->length++;
  }

  T operator [](int index){
      struct Node *temp = this->head;
      if(index>=this->length){
          throw "out of Bound";
      }
      while(index!=0){
        index--;
        temp = temp->next;
        if(temp==nullptr){
          break;
        }
      }
      return temp->data;
  }

  friend ostream &operator<<(ostream &output, const DoublyLinkedList &D)
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
      struct Node *temp = D.head->next;
      output << "[" << data << ",";
      while (temp->next != nullptr)
      {
          output << " " << temp->data << ",";
          temp = temp->next;
      }
      output << " " << temp->data << "]";
      return output;
  }

  void reversePrint(){
    struct Node *temp = this->tail;
    while(temp!=nullptr){
      cout<<temp->data<<" ";
      temp = temp->previous;
    }
    cout<<endl;
  }

};

int main(){

  DoublyLinkedList<int> prashant(12);
  prashant.push_back(1);
  prashant.push_back(2);
  prashant.push_back(3);
  prashant.push_back(4);
  prashant.push_back(5);
  prashant.push(1,89);
  cout<<prashant<<prashant[1]<<endl;
  prashant.reversePrint();
   return 0;
 }
