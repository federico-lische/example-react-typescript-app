# 🗄️ Project Structure

```sh
src
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- routes        # application routes 
|   +-- App.tsx       # main application component
|   +-- main.tsx  		# main application provider that wraps the entire application with different global providers
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- constants         # global constants used acrossed the application
|
+-- helpers           # shared helpers used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- services					# this is where all the API request declarations live
|
+-- store             # global state store via Redux
|
+-- testing           # test utilities and mocks
|
+-- theme           	# global styling theme setup for the application
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
|
+-- views          		# view / feature based modules
```


To ensure scalability and ease of maintenance, organize the majority of your code within a dedicated views folder. Each view folder should house the code specific to that feature, keeping everything well-separated. This structure helps avoid mixing feature-specific code with shared components, making the codebase easier to manage and maintain than a flat folder structure. Adopting this approach improves collaboration, readability, and the overall scalability of the application's architecture.

A view could have the following structure:

```sh
src/views/specific-view
|
+-- components  # components scoped to a specific view
|
+-- hooks       # hooks scoped to a specific view
|
+-- store      # state stores for a specific view
|
```
