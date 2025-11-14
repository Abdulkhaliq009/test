person ={
"name" : input("Wie ist dein Name? "),
"farbe": input("wie ist deine Lieblingsfarbe?"),

} 

def greets(person):
    print(f"Hallo {person['name']} ! Schön, dass du da bist!");
    print(f"Du hast angegeben, dass deine Lieblingsfarbe {person['farbe']} ist!");

greets(person);

