# alter = 29;

# # Dies ist ein Kommentar
# if alter == 25:
#   print("Hello World"); # Hier wird was ausgegeben.
# elif alter == 27:
#   print("Hello 27");
# else:
#   print("Was geht ab");


# def addieren(a, b):
#   name = "Ich";

#   def greets(text):
#     print(text)
  
#   greets(name)

# addieren(1, 5)



# # Datentypen

# string = "Hello World"
# formatted_string = f"Hello world {alter}"
# integer = 25
# array = [1, "huhu", True, []]
# floats = 1.24

# user = {
#   "name": "Markus",
#   "age": 25
# }

# print(type(floats));


# zahl = float("25");
# print(zahl);


# # Mathematik

# print(5 + int("6"));

# # Zuweisung

# test = "Bestanden!1!!"

# # Kombinierte Zuweisung

# count = 20
# count %= 5

# print(count)


# print(f"fkjdsakhkfhkdsa {alter}")

# print("Apfel", "Banane", "Kirsche", sep="/ ")

# print("Kein Zeilenumbruch hier... ", end="\n")
# print("...weiter in derselben Zeile.")

# Prompt the user to enter an amount in Euros and store it in a float variable
euro_amount = float(input("Please enter an amount in Euros (EUR): "))

# Define the exchange rates directly in the code
# Exchange rate from EUR to USD
exchange_rate_eur_to_usd = 1.08
# Exchange rate from EUR to JPY
exchange_rate_eur_to_jpy = 165.25

# Calculate the USD amount from the Euro amount
usd_amount = euro_amount * exchange_rate_eur_to_usd

# Calculate the JPY amount from the Euro amount
jpy_amount = euro_amount * exchange_rate_eur_to_jpy

# Display the results clearly and neatly formatted on the console
print("Original amount in Euros: {:.2f} EUR".format(euro_amount))
print("Converted amount in US Dollars: {:.2f} USD".format(usd_amount))
print("Converted amount in Japanese Yen: {:.2f} JPY".format(jpy_amount))


# Collecting personal information from the user

# Prompt for and store the user's name
name = input("Please enter your name: ")

# Prompt for and store the user's age, converting the input into an integer
age = int(input("Please enter your age: "))

# Prompt for and store the user's hometown
hometown = input("Please enter your hometown: ")

# Prompt for and store the user's profession
profession = input("Please enter your profession: ")

# Prompt for the user's interest in Python programming and convert to a Boolean
python_interest_input = input("Are you interested in Python programming? (yes/no): ")
python_interest = True if python_interest_input.lower() == 'yes' else False

# Assigning an age category based on the user's age
if age < 25:
    age_category = "Young Enthusiast"
else:
    age_category = "Experienced Professional"

# Displaying the user's profile summary
print("\n--- Profile Summary ---")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Hometown: {hometown}")
print(f"Profession: {profession}")
print(f"Interested in Python Programming: {'Yes' if python_interest else 'No'}")
print(f"Category: {age_category}")

# Explanation of the logic for the age category
# If the user's age is less than 25, they are categorized as a "Young Enthusiast".
# Otherwise, they are considered an "Experienced Professional". This categorization
# helps in providing a simple conclusion based on the age of the user.



# -------------------------------------------------------------
# The Geometry Comparison Challenge
# This program asks the user for the dimensions of a rectangle
# and a circle, calculates their area and circumference,
# and compares which shape has the larger area.
# -------------------------------------------------------------

# --- Rectangle Data ---
# Prompting the user for length and width of a rectangle
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

# --- Rectangle Calculations ---
# Formula for area of a rectangle: area = length * width
rectangle_area = length * width

# Formula for circumference of a rectangle: perimeter = 2 * (length + width)
rectangle_circumference = 2 * (length + width)


# --- Circle Data ---
# Prompting the user for radius of the circle
radius = float(input("Enter the radius of the circle: "))

# Defining the value of Pi
pi = 3.14159

# --- Circle Calculations ---
# Formula for area of a circle: area = Pi * radius^2
circle_area = pi * radius * radius

# Formula for circumference of a circle: circumference = 2 * Pi * radius
circle_circumference = 2 * pi * radius


# --- Result Output ---
print("\n----- Geometry Results -----")

# Display results for the rectangle
print("Rectangle:")
print("  Area:", rectangle_area)
print("  Circumference:", rectangle_circumference)

# Display results for the circle
print("\nCircle:")
print("  Area:", circle_area)
print("  Circumference:", circle_circumference)

# --- Area Comparison ---
print("\n----- Area Comparison -----")

# Compare which shape has the larger area
# Note: we use if/elif/else here for clarity
if rectangle_area > circle_area:
    print("The rectangle has a larger area.")
elif circle_area > rectangle_area:
    print("The circle has a larger area.")
else:
    print("Both shapes have the same area.")

# -------------------------------------------------------------
# End of program
# -------------------------------------------------------------



# alter = 26;
# name = "Markus";
# lastname = "Mueller";

# # If-Anweisung

# if alter >= 25:
#   print("Ist 25");
# elif alter <= 28:
#   print("Hallo World");
# else:
#   print("Keine Bedingung erfüllt");

# # Logische Operatoren

# if name == "Markus" and alter >=25: #true
#   print("Herzlich Willkommen")
#   if lastname == "Mueller": # true
#     print("Hallo Herr Müller")

