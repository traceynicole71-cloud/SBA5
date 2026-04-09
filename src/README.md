//Write a reflection of roughly 300 words addressing:
//How you implemented TypeScript features and OOP principles.
//The challenges you encountered and how you overcame them.
//How you handled asynchronous operations and error management.


So, what we learned last week about the typescript features, one knows that the four pillars--encapsulation, abstraction, inheritance, and polymorphism, are used to manage complexities and improve manageable code in larger projects.  

Even though this project is small-scaled, I used encapsulation in the Product.ts file to help keep the properties private and prevent the prices from being modified. I used abtraction in the discountCalculator.ts and taxCalculator.ts files to ensure the code functions remain clean and separated from the main and product files.  It also makes it possible to reuse the same export functions for other files without having to re-create.  

I used inheritance to reuse and extend the basic class of product descriptions; and I used polymorphism to treat different objects the same while they continue to remain intact internally, so when I defined Product and extended by defining groceryProduct...they're both products, both use the same method to call for taxes, but the results are different because the tax rates differ.

I encoutnered several difficulties. First, branching and creating different files to support one app takes great organizational skills. I followed the instructions of the project step-by-step, but I still encountered several errors and it took a while to identify and make sense of solutions because there are so many different files; and whenever I made a cahnge to one file, it kicked out another error.  i overcame it by doing what I could do at the moment and waiting until I compiled my codes at the end, where it showed the major errors.  The project still shows several errors in the files though.

Handling aysynchronous operations and error management through the await response.json, throw new AppError() in the apiServices.ts and catch(error) and sending it to the errorHandler.ts file, keeping it separate and allowing corrections without crashing the app.

