package main

import (
	"fmt"
)

type Person struct{
	Id int
	Name string
	Fullname string
}

type Balance struct{
	Id int 
	Sum int
	User Person
	Person
}

func main(){
	var people Person  = Person{
		Id: 1,
		Name: "Alex",
		Fullname: "AlexK",
	}
	var people2 Person = Person{
		Id: 2, 
		Name:  "Sanechka",
		Fullname: "SanechkaxD",
	}
	
	var  balance Balance = Balance{
		Id : 1,
		Sum : 20000,
		User: people,

	}
	balance.Person = people2
	balance.updateSum(-100000)
	balance.User.updateName("Alexis")
	fmt.Printf("%#v\n", balance)

}
	
func (b *Balance) setSum(sum int){
	b.Sum =  sum
}

func (b *Balance) updateSum(sum int) { 
	b.Sum = b.Sum + sum
}

func (p *Person) updateName(name string){
	p.Name = name
}