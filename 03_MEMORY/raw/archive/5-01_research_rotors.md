> Source: https://marctenbosch.com/quaternions/

Let's remove Quaternions from every 3D Engine
(An Interactive Introduction to Rotors from Geometric Algebra) Marc ten BoschThe clearest explanation of 3D geometric algebra within 15 minutes that I've seen so far—BrokenSymmetry I am sold. While I can understand quaternions to an extent, this way of thinking is a much more intuitive and elegant approach.—Jack Rasksilver This sets a high standard for educational material, and is a shining example of how we can improve education with today's technologies.—Sebastien Pierre When I was in college, I asked one of my math professors why the cross product of two vectors results in a perpendicular vector whose magnitude is equal to the area of the parallelogram formed by the two vectors. Like..what? Why? And what about 2D? They blew me off, and that was a big part of why I stopped taking math in college. [...] Anyway, I had pretty much given up on ever truly understanding the whole jumble of seemingly unrelated types that are cross products. But then I saw this: And...wow. Just 15 minutes and a lot more than just cross products suddenly make a lot more sense.—Mason Remaley  
To represent 3D rotations graphics programmers use Quaternions. However, Quaternions are taught at face value. We just accept their odd multiplication tables and other arcane definitions and use them as black boxes that rotate vectors in the ways we want. Why does $\mathbf{i}^2=\mathbf{j}^2=\mathbf{k}^2=-1$ and $\mathbf{i} \mathbf{j} = \mathbf{k}$? Why do we take a vector and upgrade it to an "imaginary" vector in order to transform it, like $\mathbf{q} (x\mathbf{i} + y\mathbf{j} + z \mathbf{k}) \mathbf{q}^{*}$? Who cares as long as it rotates vectors the right way, right?
Personally, I have always found it important to actually understand the things I am using. I remember learning about Cross Products and Quaternions and being confused about why they worked this way, but nobody talked about it. Later on I learned about Geometric Algebra and suddenly I could see that the questions I had were legitimate, and everything became so much clearer.
In Geometric Algebra there is a way to represent rotations called a Rotor that generalizes Quaternions (in 3D) and Complex Numbers (in 2D) and even works in any number of dimensions.
3D Rotors are in a sense the true form of quaternions, or in other words Quaternions are an obfuscated version of Rotors. They are equivalent in that:
they have the same number of components,
their API is the same,
they are as efficient,
they are good for interpolation and avoiding gimbal lock, etc...
in fact, they are isomorphic,
so it is possible to do some math to turn a rotor into a quaternion, but doing so makes them less general and less intuitive (and loses extra capabilites).
But instead of defining Quaternions out of nowhere and trying to explain how they work retroactively, it is possible to explain Rotors almost entirely from scratch. This obviously takes more time, but I find it is very much worth it because it makes them much easier to understand!
For example, Quaternions are introduced as this mysterious four-dimensional object, but why introduce a fourth dimension of space to visualize a 3D concept? By contrast 3D Rotors do not require the use of a fourth dimension of space in order to be visualized.
Trying to visualize quaternions as operating in 4D just to explain 3D rotations is a bit like trying to understand planetary motion from an earth-centric perspective i.e. overly complex because you are looking at it from the wrong viewpoint.
It would be great if we could start phasing out the use and teaching of Quaternions and replace them with Rotors. The change is simple and the code remains almost the same, but the understanding grows a lot.
As a side note, Geometric Algebra contains more than just Rotors, and is a very useful tool to have in one's toolbox. This article also serves as an introduction to it.
(In the following article, every diagram is interactive. The video follows the article, and you can press the buttons to play the relevant section of video. Conversely, you can press the button to go to the section of the article that corresponds to what the video is playing at this moment. You can maximize your window to have more space for the video, or you can press the button to set it to a fixed size.)
Planes of Rotations
Rotations happen in 2D planes
In 3D, we usually think of rotations as happening around an axis, like a wheel turning around its axle, but instead of thinking about the axle a more correct way is to think about the plane that the wheel lies on, perpendicular to the axle.
This old lady is spinning wheel in the $\mathbf{xz}$ plane, perpendicular to the $\mathbf{y}$ axis.  
This is because if we split a vector into two pieces, one lying inside the plane ($\mathbf{v}_\parallel$) and one lying outside the plane ($\mathbf{v}_\perp$), the rotation rotates the inside part while keeping the outside part the same.
Rotation in the $yx$ plane [Drag anywhere to move the camera]  
In 2D there is only one single plane to rotate in (there is no outside part). Therefore considering rotations to happen around a third axis (perpendicular to the 2D plane) is technically incorrect, since we shouldn't need to introduce another dimension to perform rotations.
If you told a 2D "flatlander" (who lives inside a 2D plane and has only ever experienced 2D) about a perpendicular rotation axis they would look at you and ask "which direction does the axis point along? I can't picture it!"
[Aside] And in higher dimensions (4D and more) it is impossible to define a single normal vector to a 2D plane (for example in 4D there are two normal directions to a 2D plane, in 5D there are three normals directions, and in $n$D there are $n-2$)
Explicit Sense of Rotation
In addition, when thinking about rotation around an axis, the sense of the rotation is undefined, and so needs to be defined by convention (via the so-called "right hand rule").
However, if we think about rotations as happening inside planes, the sense is clear: rotation in the $\mathbf{xy}$ plane means a rotation that takes the (unit) vector $\mathbf{x}$ to the (unit) vector $\mathbf{y}$, inside the plane they form together. Rotation in the $\mathbf{yx}$ plane is the opposite rotation: it takes the vector $\mathbf{y}$ to the vector $\mathbf{x}$.
[Aside] When I first learned about the three 3D rotation matrices along orthogonal planes, I remember thinking, why the hell does the $\mathbf{R_y}$ matrix have the opposite sign? It's because of the "right hand rule", where we must define rotation around the $\mathbf{y}$ axis to be from $\mathbf{z}$ to $\mathbf{x}$ instead of $\mathbf{x}$ to $\mathbf{z}$ to maintain a consistent right-handed sense of rotation. That convention becomes unnecessary when we talk directly about the plane itself.
$R_X(\theta) = \begin{bmatrix}1 & 0 & 0\\0 & \cos(\theta) & -\sin(\theta)\\0 & \sin(\theta) & \cos(\theta)\end{bmatrix} \: \: \: R_Y(\theta) = \begin{bmatrix}\cos(\theta) & 0 & \bbox[5px,border-bottom:2px solid red]{\ \ }\sin(\theta)\\0 & 1 & 0\\ \bbox[5px,border-bottom:2px solid red]{-}\sin(\theta) & 0 & \cos(\theta)\end{bmatrix} \: \: \: R_Z(\theta) = \begin{bmatrix}\cos(\theta) & -\sin(\theta) & 0\\\sin(\theta) & \cos(\theta) & 0\\0 & 0 & 1\end{bmatrix}$
Bivectors
The Outer Product
To compute the axis of rotation to rotate one vector $\mathbf{a}$ to another vector $\mathbf{b}$, we take the cross product of the two vectors to get a vector that is perpendicular to both. But why "leave" the plane, since a rotation is fundamentally a 2D thing?
Instead we take what is called the outer product (also called exterior, or wedge product) of the two vectors, building a new element called a bivector (or 2-vector) $\mathbf{B}$ that represents the plane the two vectors form together. If the cross product creates the normal vector to a plane, the outer product creates the plane itself. Taking the normal to the plane is extraneous.
$$\mathbf{B} = \mathbf{a} \wedge \mathbf{b}$$
$\mathbf{B}$ can be represented as the parallelogram built from the vectors $\mathbf{a}$ and $\mathbf{b}$, in the plane they form together.
The idea of a bivector might seem a bit strange at first, but they are pretty much as fundamental as vectors, as we will see. If a vector is like a line, then a bivector is like a plane... The properties of the outer product are suited to capture the properties of planes.
Basis for Bivectors
Bivectors have components, just like vectors. But they are defined in terms of basis planes instead of basis lines like vectors.
The three orthogonal basis planes are $\mathbf{x} \wedge \mathbf{y}$, $\mathbf{x} \wedge \mathbf{z}$, and $\mathbf{y} \wedge \mathbf{z}$, as seen on the diagram to the right.
But first let's look at the simpler 2D case...
2D Bivectors
In 2D there is only one plane, the $\mathbf{xy}$ plane. So a 2D bivector only has one component. For a bivector built from vectors $\mathbf{a}$ and $\mathbf{b}$, this number $B_{xy}$ is equal to the (signed) area of the parallelogram the two vectors form together.
$$\mathbf{B}=\mathbf{a} \wedge \mathbf{b} = B_{xy} (\mathbf{x} \wedge \mathbf{y})$$
You can play with a 2D bivector in the following interactive diagram, by adjusting the (unit) vectors it is made from:
You can see that by changing the angle between the vectors the area of the parallelogram changes (according to the sine of the angle).
If the vectors are the same, or if they are parallel, they don't form a proper plane and the result is zero. This simple property defines what a bivector is:
$$\mathbf{a} \wedge \mathbf{a} = 0$$
By looking at the sum of two vectors, we can see that this property implies the following:
$$\begin{eqnarray}(\mathbf{a}+\mathbf{b}) \wedge (\mathbf{a}+\mathbf{b}) &=& 0 \\ \mathbf{a} \wedge \mathbf{a} + \mathbf{b} \wedge \mathbf{a} + \mathbf{a} \wedge \mathbf{b} + \mathbf{b} \wedge \mathbf{b} &=& 0 \\ \mathbf{b} \wedge \mathbf{a} + \mathbf{a} \wedge \mathbf{b} &=& 0 \end{eqnarray} $$
Therefore:
$$\mathbf{a} \wedge \mathbf{b} = -\mathbf{b} \wedge \mathbf{a}$$
Just like the sense of a rotation matters, the order of the arguments to the outer product matters. Swapping the arguments changes the sign of the result (this is called "anti-symmetric").
In the diagram, the sign is represented using the color, which changes from blue to green. The sign changes whenever the rotation from $\mathbf{a}$ to $\mathbf{b}$ goes from being clockwise to being anticlockwise (i.e. if it matches the ($\mathbf{x}$ to $\mathbf{y}$) direction or the ($\mathbf{y}$ to $\mathbf{x}$) direction).
You can see how the properties of the outer product are suited to capture the properties of planes and rotations.
2D Bivectors from non-unit vectors 
The vectors obviously don't have to be unit lengths, and in this diagram the restriction is removed:
The signed area of the parallelogram is proportional to the lengths of both vectors: $B_{xy} = \sin(\alpha)\|a\|\|b\|$ where $\alpha$ is the angle between $\mathbf{a}$ and $\mathbf{b}$. So for example doubling the length of one vector doubles the area.
We can get the actual value by plugging in the vectors in component form:
$$\begin{eqnarray}\mathbf{a} \wedge \mathbf{b} &=& (a*x \mathbf{x} + a_y \mathbf{y}) \wedge (b_x \mathbf{x} + b_y \mathbf{y}) \\ &=& a_x b_x (\mathbf{x} \wedge \mathbf{x}) + a_x b_y (\mathbf{x} \wedge \mathbf{y}) + a_y b_x (\mathbf{y} \wedge \mathbf{x}) + a_y b_y (\mathbf{y} \wedge \mathbf{y}) \\ &=& a_x b_y (\mathbf{x} \wedge \mathbf{y}) + a_y b_x (\mathbf{y} \wedge \mathbf{x}) \\ &=& a_x b_y (\mathbf{x} \wedge \mathbf{y}) - a_y b_x (\mathbf{x} \wedge \mathbf{y}) \\ &=& (a_x b_y - a_y b_x) (\mathbf{x} \wedge \mathbf{y}) \end{eqnarray}$$
$$B*{xy} = a*x b_y - b_x a_y$$
3D Bivectors 
Just like the coordinates of a vector $\mathbf{v}$ can be thought of as the projections of the vector onto the three orthogonal basis axes ($\mathbf{x},\mathbf{y},\mathbf{z}$), the coordinates of a bivector $\mathbf{B}$ can be thought of as the projections of the small plane onto the three orthogonal basis planes.
The projections of the vector are the lengths of that vector along each basis vector, while the projections of the bivector are the areas of the plane on each basis plane.
For a vector:
$$\mathbf{v} = \bbox[5px,border-bottom:2px solid red]{v_x} \mathbf{x} + \bbox[5px,border-bottom:2px solid green]{v_y} \mathbf{y} + \bbox[5px,border-bottom:2px solid blue]{v_z} \mathbf{z}$$
For a bivector:
$$\mathbf{B} = \bbox[5px,border-bottom:2px solid coral]{B*{xy}} (\mathbf{x} \wedge \mathbf{y}) + \bbox[5px,border-bottom:2px solid gold]{B*{xz}} (\mathbf{x} \wedge \mathbf{z}) + \bbox[5px,border-bottom:2px solid DarkViolet]{B*{yz}} (\mathbf{y} \wedge \mathbf{z})$$
Where $B_{xy}, B_{xz}, B_{yz}$ are just numbers like $v_x, v_y, v_z$ (they are underlined to match the diagram colors).
The components of a 3D bivector are just the three 2D projections of the bivector onto the 2D basis planes.
Using the same method as before we find that the actual values of the components look a lot like the XY component from the 2D case, but applied to all three planes:
$$B*{xy} = a_x b_y - b_x a_y$$
$$B*{xz} = a*x b_z - b_x a_z$$
$$B*{yz} = a*y b_z - b_y a_z$$
You can play with a 3D bivector in the following interactive diagram:
Does the exterior product remind you of anything? In 3D, the definition of the outer product is very similar to that of the cross product. In fact, in 3D a vector that comes from a cross product (such as a normal vector) will have three components which are equal to the components of the bivector (the numbers are the same, but the basis is different).
$$\begin{eqnarray}\mathbf{a} \wedge \mathbf{b} &=& & (a_x b_y - b_x a_y)(\mathbf{x} \wedge \mathbf{y}) \\ & & + & (a_x b_z - b_x a_z)(\mathbf{x} \wedge \mathbf{z}) \\ & & + & (a_y b_z - b_y a_z)(\mathbf{y} \wedge \mathbf{z}) \\ \\ \mathbf{a} \times \mathbf{b} &=& & (a_x b_y - b_x a_y) \ \mathbf{z} \\ & & - & (a_x b_z - b_x a_z) \ \mathbf{y} \\ & & + & (a_y b_z - b_y a_z) \ \mathbf{x}\end{eqnarray}$$
[Aside] I chose a lexicographic order for the basis, but choosing $\mathbf{z} \wedge \mathbf{x}$ instead of $\mathbf{x} \wedge \mathbf{z}$ would make the signs the same, and would also makes the bivector basis directions consistent. This is the right hand rule, except the understandable non-arbitrary version :).
On the other hand, in 4D there is no equivalent ordering (which of these should be flipped? $\mathbf{xy}$, $\mathbf{xz}$, $\mathbf{xw}$, $\mathbf{yz}$, $\mathbf{yw}$, $\mathbf{zw}$), so I prefer the lexicographic ordering because it generalizes better and is easier to remember. I never look at the code for the math, and I generate it automatically anyway, so the sign details don't matter to me!
So there are good arguments for either ordering.
The bivector definition makes sense geometrically, instead of appearing out of thin air. I remember thinking when I was learning the cross product, why the hell does it return a vector that has length equal to the area of the parallelogram formed by the two vectors? That feels so arbitrary. And why would you be allowed to turn the area of the parallelogram into the length of the vector?
Semantics of Vectors and Bivectors
In 3D, a bivector has three coordinates, one per plane: ($\mathbf{xy}$, $\mathbf{xz}$, and $\mathbf{yz}$). Vectors also have three coordinates, one per axis ($\mathbf{x}$, $\mathbf{y}$ and $\mathbf{z}$). Each plane is perpendicular to one axis. This is a coincidence that only happens in three dimensions (*) and it is why historically we have been confusing bivectors with vectors.
[Aside] (_) In 2D there is only one basis bivector ($\mathbf{xy}$), in 3D there are 3 basis bivectors ($\mathbf{xy},\mathbf{xz},\mathbf{yz}$), in 4D there are 6 basis bivectors ($\mathbf{xy},\mathbf{xz},\mathbf{xw},\mathbf{yz},\mathbf{yw},\mathbf{zw}$), etc...
In programming terms, they both have the same memory layout, but different operations. Using a 3D vector instead of a 3D bivector is like "type-casting" the bivector.
Here's an example: you might have seen how normal vectors transform differently than regular vectors, using the "inverse transpose" of the matrix $(\mathbf{M}^{T})^{-1}$ instead of the matrix itself. That's because they are not really vectors, but actually bivectors, which we have "type-cast" to vectors. In physics, there's a hack called an "axial vector," which has been introduced to differentiate vectors that come from cross products from regular vectors. Bivector is the actual "type" of the object and it should be thought of and manipulated as such.
[Aside] Trivectors
We can keep taking the outer product to build not just oriented 2D areas, but oriented 3D volumes as well. A trivector $T$ can be built by taking the outer product twice:
$$\mathbf{T} = \mathbf{a} \wedge \mathbf{b} \wedge \mathbf{c}$$  
In 3D it stops there. Just like in 2D there is only one plane which fills all of 2D space, in 3D there is only one volume which fills all of 3D space.
[But in nD we can keep building more outer products of vectors, until we reach the n-th dimension. For example in 4D, we have four basis tri-vectors ($\mathbf{xyz},\mathbf{xyw},\mathbf{xwz},\mathbf{yzw}$) and one basis 4-vector $\mathbf{xyzw}$]
In 3D a trivector has only one basis component ($T_{xyz}$), equal to the volume of the parallelepiped generated by the three vectors. The triple outer product is a better version of the scalar triple product ($(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$) because it only involves one kind of operation, returns the correct type (volume instead of scalar) and works in any number of dimensions.
$$\mathbf{T} = T_{xyz} \mathbf{x} \wedge \mathbf{y} \wedge \mathbf{z}$$
The Geometric Product
Multiplying Vectors together 
 The geometric product $\mathbf{a b}$ (denoted without a symbol) is another operation one can do on vectors. The geometric product is defined so that vectors have inverses (i.e $\mathbf{a} \mathbf{a}^{-1}= 1$ where 1 is just the number $1$!) and have nice properties like associativity ($\mathbf{a} (\mathbf{b} \mathbf{c}) = (\mathbf{a} \mathbf{b}) \mathbf{c}$). The goal is to be able to multiply vectors together so that —just like for matrices— multiplication corresponds to geometric operations.
[Aside] Having inverses is useful so that whatever object $\mathbf{a} \mathbf{a}^{-1}$ is, it won't have an effect on vectors, i.e. it will just act like multiplying by the number $1$
To define the product, first note that it is possible to split a product (or any function that takes two arguments) into the sum of a part that does not change if we swap the arguments and one that does change, in the following way:
$$\begin{eqnarray}\mathbf{a} \mathbf{b} &=& \frac{1}{2} (\mathbf{a} \mathbf{b} + \mathbf{a} \mathbf{b} + \mathbf{b} \mathbf{a} - \mathbf{b} \mathbf{a}) \\ &=& \frac{1}{2} (\mathbf{a} \mathbf{b} + \mathbf{b} \mathbf{a}) + \frac{1}{2} (\mathbf{a} \mathbf{b} - \mathbf{b} \mathbf{a})\end{eqnarray}$$
The first term does not depend on the order of the arguments $\mathbf{a}$ and $\mathbf{b}$ anymore (it is called the "symmetric" part), while the second term changes sign when the arguments are swapped (it is called the "antisymmetric" part).
The dot product of two vectors (also called inner product) is symmetric and is a measure of distance ($\mathbf{a} \cdot \mathbf{a} = \|\mathbf{a}\|^2 $), so it sounds useful geometrically to set it equal to the symmetric part:
$$\frac{1}{2} (\mathbf{a} \mathbf{b} + \mathbf{b} \mathbf{a}) = \mathbf{a} \cdot \mathbf{b}$$
Similarly, the outer product of two vectors is antisymmetric, so it sounds useful geometrically to set it equal to the antisymmetric part:
$$\frac{1}{2} (\mathbf{a} \mathbf{b} - \mathbf{b} \mathbf{a}) = \mathbf{a} \wedge \mathbf{b}$$
In addition, the dot product contains the cosine of the angle between the two vectors ($\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos(\alpha)$), while the outer product contains the sine of the angle. Together they fully describe the angle between the vectors, as well the plane they form.
[Aside] The completeness of the description is what makes the product invertible, since we can get from one vector to the other using the information contained in their product. If I give you $\mathbf{a}$ and $\mathbf{a} \mathbf{b}$ you can get $\mathbf{b}$. This could not be done with just the cosine, or just the sine/plane.
So the geometric product is:
$$\mathbf{a} \mathbf{b} = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \wedge \mathbf{b}$$
It is strange because multiplying two vectors together gives the sum of two different things: a scalar and a bivector. However this is similar to how a complex number is the sum of a scalar and an "imaginary" number, so you might be used to it already. Here the bivector part corresponds to the "imaginary" part of the complex number. Except it is not "imaginary," it's just a bivector, which we have a concrete picture of!
Basically, by multiplying two vectors together we compute useful properties about them (the "length of their projections onto each other" / "cosine of the angle" ($\mathbf{a} \cdot \mathbf{b}$), and the "plane they form together" / "sine of the angle" ($\mathbf{a} \wedge \mathbf{b}$)), which we keep bundled together via the "plus" sign. The geometric product also gives these "property bundles" operations that can be applied to them, and these operations have geometric interpretations (for example: rotating and reflecting vectors), as we shall see now.
[Aside] It is possible to express the geometric product in terms of the sine and cosine: $\mathbf{a} \mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\| ( \cos(\alpha) + \sin(\alpha) \mathbf{B} )$ where $\mathbf{B}$ is a bivector in the plane of both vectors, made from two unit perpendicular vectors.
Multiplication Table
The multiplication table helps make this product more concrete: let's see what happens if we take products of the basis vectors ($\mathbf{x}$,$\mathbf{y}$,$\mathbf{z}$).
For any basis vector, such as the $\mathbf{x}$ axis, the result is $1$:
$$\mathbf{x} \mathbf{x} = \mathbf{x} \cdot \mathbf{x} + \mathbf{x} \wedge \mathbf{x} = 1$$
For any pair of basis vectors, such as the $\mathbf{x}$ and $\mathbf{y}$ axes, the result is just the bivector they form together:
$$\mathbf{x} \mathbf{y} = \mathbf{x} \cdot \mathbf{y} + \mathbf{x} \wedge \mathbf{y} = \mathbf{x} \wedge \mathbf{y}$$
(so we can call $\mathbf{x} \wedge \mathbf{y}$ simply $\mathbf{x} \mathbf{y}$ since they are the same thing! This is true for basis vectors, as well vectors which are perpendicular i.e. have their dot product equal to zero)
This gives the following table:
$\mathbf{a} \mathbf{b}$ $\mathbf{b}$ $\mathbf{x}$ $\mathbf{y}$ $\mathbf{z}$ $\mathbf{a}$ $\mathbf{x}$ $1$ $\mathbf{x} \mathbf{y}$ $\mathbf{x} \mathbf{z}$ $\mathbf{y}$ $-\mathbf{x} \mathbf{y}$ $1$ $\mathbf{y} \mathbf{z}$ $\mathbf{z}$ $-\mathbf{x} \mathbf{z}$ $-\mathbf{y} \mathbf{z}$ $1$  
It is basically trivial, unlike the quaternion table for example.
[Aside] For example, multiplying the two vectors $(5,3,0)$ and $(2,0,1)$:
$$\begin{eqnarray}( 5 \mathbf{x} + 3 \mathbf{y} ) ( 2 \mathbf{x} + 1 \mathbf{z} ) &=& 5 \ 2 \ \mathbf{x} \mathbf{x} + 5 \ 1 \ \mathbf{x} \mathbf{z} + 3 \ 2 \ \mathbf{y} \mathbf{x} + 3 \ 1 \ \mathbf{y} \mathbf{z}\\ &=& 10 + 5 \ \mathbf{x} \mathbf{z} - 6 \ \mathbf{x} \mathbf{y} + 3 \ \mathbf{y} \mathbf{z} \end{eqnarray} $$
The Reflection Formula (Traditional Version) 
Reflection by a vector [you can move each vector]  
If we have a unit vector $\mathbf{a}$ and a vector $\mathbf{v}$ we can reflect $\mathbf{v}$ by the plane perpendicular to $\mathbf{a}$.
This is done the usual way: we decompose $\mathbf{v}$ into a part perpendicular to the plane $\mathbf{v}_\perp = (\mathbf{v} \cdot \mathbf{a}) \mathbf{a}$, and a part parallel to the plane $\mathbf{v}_\parallel = \mathbf{v} - \mathbf{v}_\perp = \mathbf{v} - (\mathbf{v} \cdot \mathbf{a})\mathbf{a}$.
Then, to reflect the vector, flip the perpendicular part while keeping the parallel part unchanged:
$$\begin{eqnarray}R*{\mathbf{a}}(\mathbf{v}) &=& \mathbf{v}*\parallel - \mathbf{v}_\perp \\ &=& ( \mathbf{v} - (\mathbf{v} \cdot \mathbf{a})\mathbf{a} ) - ((\mathbf{v} \cdot \mathbf{a}) \mathbf{a}) \\ &=&\mathbf{v} - 2 (\mathbf{v} \cdot \mathbf{a}) \mathbf{a}\end{eqnarray}$$
The Reflection Formula (Geometric Product Version) 
At this point we can replace the dot product $\mathbf{v} \cdot \mathbf{a}$ by its geometric product version $\frac{1}{2} (\mathbf{v} \mathbf{a} + \mathbf{a} \mathbf{v})$ to get the following:
$$\begin{eqnarray}R_{\mathbf{a}}(\mathbf{v}) &=& \mathbf{v} - 2(\frac{1}{2}( \mathbf{v} \mathbf{a} + \mathbf{a} \mathbf{v})) \mathbf{a} \\ &= & \mathbf{v} - \mathbf{v} \mathbf{a}^2 - \mathbf{a} \mathbf{v} \mathbf{a} \\ &= & - \mathbf{a} \mathbf{v} \mathbf{a}\end{eqnarray}$$
($\mathbf{a}^2 = \mathbf{a} \cdot \mathbf{a} = 1$ since $\mathbf{a}$ is a unit vector)
This is saying the exact same thing but in a different notation. Using a simple product notation instead of a formula to encode a fundamental operation such as a reflection is going to prove very useful!
[Aside] If you are wondering how taking the geometric product more than once works, just look at the basis vectors and use the associativity property. There are only four possible cases:
$$\begin{eqnarray}\mathbf{x} (\mathbf{x} \mathbf{x}) &=& \mathbf{x} 1 = \mathbf{x} \\ \mathbf{x} (\mathbf{x} \mathbf{y}) &=& (\mathbf{x} \mathbf{x}) \mathbf{y} = \mathbf{y} \\ \mathbf{x} (\mathbf{x} \mathbf{z}) &=& (\mathbf{x} \mathbf{x}) \mathbf{z} = \mathbf{z} \\ \mathbf{x} (\mathbf{y} \mathbf{z}) &=& \mathbf{x} \mathbf{y} \mathbf{z}\end{eqnarray}$$
The results are: vector, vector, vector, trivector. However the last case can only happen if the three vectors are independent, which is never the case for $-\mathbf{ava}$
You can also swap a pair of elements. This flips the sign since pairs of elements are bivectors. You can do this until you get pairs that combine to $1$:
$$\mathbf{y} (\mathbf{x} \mathbf{y}) =\mathbf{y} \mathbf{x} \mathbf{y} = - \mathbf{x} \mathbf{y} \mathbf{y} = -\mathbf{x} $$
This gives the following table for multiplying a vector and a bivector: 
$\mathbf{a} \mathbf{B}$   $\mathbf{B}$   $\mathbf{xy}$   $\mathbf{xz}$   $\mathbf{yz}$   $\mathbf{a}$   $\mathbf{x}$   $\mathbf{y}$   $\mathbf{z}$   $\mathbf{xyz}$   $\mathbf{y}$   $-\mathbf{x}$   $-\mathbf{xyz}$   $\mathbf{z}$   $\mathbf{z}$   $\mathbf{xyz}$   $-\mathbf{x}$   $-\mathbf{y}$  
[Aside] For those curious it is possible to look at what happens at each step of $- \mathbf{a} \mathbf{v} \mathbf{a}$ in terms of the geometric product.
The first step is: 
$$\mathbf{v} \mathbf{a} = \mathbf{v} \cdot \mathbf{a} + \mathbf{v} \wedge \mathbf{a}$$
If, like before, we split $\mathbf{v}$ into a part perpendicular to the plane ($\mathbf{v}_\perp$) and a part parallel to it ($\mathbf{v}_\parallel$), we get:
$$\begin{eqnarray}(\mathbf{v}_\perp + \mathbf{v}_\parallel) \mathbf{a} &=& (\mathbf{v}_\perp + \mathbf{v}_\parallel) \cdot \mathbf{a} + (\mathbf{v}_\perp + \mathbf{v}_\parallel) \wedge \mathbf{a} \\ &=& \mathbf{v}_\perp \cdot \mathbf{a} + \mathbf{v}_\parallel \cdot \mathbf{a} + \mathbf{v}_\perp \wedge \mathbf{a} + \mathbf{v}_\parallel \wedge \mathbf{a}\end{eqnarray}$$
$\mathbf{v}_\parallel \cdot \mathbf{a} = 0$ since these vectors are perpendicular, while $\mathbf{v}_\perp \wedge \mathbf{a} = 0$ since these vectors are parallel.
$$\mathbf{v} \mathbf{a} = \mathbf{v}_\perp \cdot \mathbf{a} + \mathbf{v}_\parallel \wedge \mathbf{a}$$
The first term is just the length of the projection of $\mathbf{v}$ onto $\mathbf{a}$, i.e the first term is just length of $\mathbf{v}_\perp$.
Let's call $\hat{\mathbf{v}_\parallel}$ the normalized version of $\mathbf{v}_\parallel$, such that $\mathbf{v}_\parallel = \hat{\mathbf{v}_\parallel}\|\mathbf{v}_\parallel\|$. Then the second term is just a bivector $\mathbf{B} = \hat{\mathbf{v}_\parallel} \wedge \mathbf{a}$ multiplied by the length of $\mathbf{v}_\parallel$.
This bivector $\mathbf{B}$ is made out of two perpendicular unit vectors, so it is a very pure representation of the plane of vectors $\mathbf{a}$ and $\mathbf{v}$. It doesn't contain information about their relative angle or their lengths, just the orientation of the plane.
So both terms are just the decomposition of $\mathbf{v}$ into two orthogonal projections ($\mathbf{v}_\parallel$ and $\mathbf{v}_\perp$), as well as the plane they form ($\mathbf{B}$):
$$\| \mathbf{v}_\perp \| + \| \mathbf{v}_\parallel \| \mathbf{B}$$
Before moving on to the next step, we can replace the outer product by the geometric product because $\mathbf{a}$ and $\mathbf{v}_\parallel$ are perpendicular and so their outer and geometric product are equivalent (since the dot product part of their geometric product is zero).
$$\mathbf{v}_\perp \cdot \mathbf{a} + \mathbf{v}_\parallel \wedge \mathbf{a} = \mathbf{v}_\perp \cdot \mathbf{a} + \mathbf{v}_\parallel \mathbf{a}$$
The second step is: 
$$\mathbf{a} \mathbf{v} \mathbf{a} = \mathbf{a} (\mathbf{v}_\perp \cdot \mathbf{a}) + \mathbf{a} \mathbf{v}_\parallel \mathbf{a}$$
The first term is just the component of $\mathbf{v}$ along $\mathbf{a}$, i.e. the component of $\mathbf{v}$ perpendicular to the plane. Or in other words the first term is just $\mathbf{v}_\perp$.
$$\mathbf{a} \mathbf{v} \mathbf{a} = \mathbf{v}_\perp + \mathbf{a} \mathbf{v}_\parallel \mathbf{a}$$
Since (again) $\mathbf{a}$ and $\mathbf{v}_\parallel$ are perpendicular their geometric product is just their outer product, so we can swap them and negate the sign.
$$\begin{eqnarray}\mathbf{a} \mathbf{v} \mathbf{a} &=& \mathbf{v}_\perp - \mathbf{v}_\parallel \mathbf{a} \mathbf{a} \\ &=& \mathbf{v}_\perp - \mathbf{v}_\parallel\end{eqnarray}$$
Finally the last step flips the sign: 
$$-\mathbf{a} \mathbf{v} \mathbf{a} = -\mathbf{v}_\perp + \mathbf{v}_\parallel$$
So we see that the component of $\mathbf{v}$ perpendicular to the plane is flipped, while the parallel part stays the same!
[Aside] The length of $\mathbf{a}$ is not very important so the following ignores it, but if $\mathbf{a}$ is not a unit vector, we must divide by its length and the formula becomes $- \mathbf{a} \mathbf{v} \mathbf{a}^{-1}$, which looks more like the "Sandwich Product" you might be used to. 
Two Reflections is a Rotation: 2D case 
It turns out that if we apply two successive reflections to $\mathbf{v}$ (using vector $\mathbf{a}$ followed by vector $\mathbf{b}$) we get a rotation by twice the angle between the vectors $\mathbf{a}$ and $\mathbf{b}$.
You can apply each successive Reflection Step in the diagram below :
You can also change the vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{v}$, but the initial configuration of vectors in the diagram (click the "Reset Vector Positions" button) should make it especially clear why the rotation ends up being twice the angle. Another configuration that is not bad is to set $\mathbf{a}$ and $\mathbf{b}$ to the $\mathbf{x}$ and $\mathbf{y}$ axes.
Two Reflections is a Rotation: 3D case 
In the 3D case the vector $\mathbf{v}$ can be split into two different parts, one lying inside the plane defined by $\mathbf{a}$ and $\mathbf{b}$, and one lying outside (perpendicular to) the plane. As seen in the following diagram, when the vector gets reflected by each plane its outside part stays the same. So for the inside part, we are back to the 2D case, and it just gets rotated by twice the angle!
Rotors 
In terms of the Geometric Product, the two reflections simply correspond to: 
$$R*{\mathbf{b}}(R*{\mathbf{a}}(\mathbf{v})) = - \mathbf{b} (-\mathbf{a} \mathbf{v} \mathbf{a}) \mathbf{b} = \mathbf{b} \mathbf{a} \: \mathbf{v} \: \mathbf{a} \mathbf{b}$$
We call $\mathbf{a} \mathbf{b} = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \wedge \mathbf{b}$ a Rotor because by multiplying by $\mathbf{a} \mathbf{b}$ on both sides of a vector we perform a rotation ($\mathbf{b} \mathbf{a}$ the same as $\mathbf{a} \mathbf{b}$ except the bivector part is flipped).
Applying a Rotor $\mathbf{a} \mathbf{b}$ to both sides of a vector rotates this vector in the plane of vectors $\mathbf{a}$ and $\mathbf{b}$ by twice the angle between $\mathbf{a}$ and $\mathbf{b}$.
✨⭐💖  That's all there is to it!  💖⭐✨�
3D Rotors vs Quaternions 
We can notice that 3D Rotors look a lot like Quaternions:
$$a + B*{xy} \ \mathbf{x} \wedge \mathbf{y} + B*{xz} \ \mathbf{x} \wedge \mathbf{z} + B\_{yz} \ \mathbf{y} \wedge \mathbf{z}$$
$$a + b \ \mathbf{i} + c \ \mathbf{j} + d \ \mathbf{k}$$
In fact the code/math is basically the same! The main difference is that $\mathbf{i}$, $\mathbf{j}$ and $\mathbf{k}$ get replaced by $\mathbf{y} \wedge \mathbf{z}$, $\mathbf{x} \wedge \mathbf{z}$ and $\mathbf{x} \wedge \mathbf{y}$, but they work mostly the same way. Here is the code comparison. I did not include everything, such as log/exp for interpolation, but they are easy to make.
However, as we have seen, 3D Rotors are a 3D concept that does not require the use of "4D double rotations" or "stereographic projection" to visualize. Trying to visualize quaternions as operating in 4D just to explain 3D rotations is a bit like trying to understand planetary motion from an earth-centric perspective i.e. overly complex because you are looking at it from the wrong viewpoint.
As we have seen, representing rotations as operating inside planes instead of around vectors helps a lot. For example the basis bivectors square to $-1$, just like the basis quaternions ($\mathbf{i}^2=\mathbf{j}^2=\mathbf{k}^2 = -1$) :
$$(\mathbf{x} \mathbf{y})^2 = (\mathbf{x} \mathbf{y}) (\mathbf{x} \mathbf{y}) = - (\mathbf{y} \mathbf{x}) (\mathbf{x} \mathbf{y}) = -\mathbf{y} (\mathbf{x} \mathbf{x}) \mathbf{y} = - \mathbf{y} \mathbf{y} = -1$$
Multiplying two bivectors together gives a third bivector, but this is basically trivial, and we don't have to remember how $\mathbf{i} \mathbf{j} = \mathbf{k}$:
$$(\mathbf{x} \mathbf{y}) (\mathbf{y} \mathbf{z}) = \mathbf{x} (\mathbf{y} \mathbf{y}) \mathbf{z} = \mathbf{x} \mathbf{z}$$
(Note that we have used $\mathbf{x} \wedge \mathbf{y} = \mathbf{x} \mathbf{y}$)
These properties are a consequence of the geometric product instead of appearing out of thin air!
Further Reading
(by the way, Geometric Algebra contains a lot more cool stuff than rotors!)
Linear and Geometric Algebra by Macdonald (2011) [Amazon Link]
Clear and simple, but more of a classical math textbook. Meant to replace an undergraduate Linear Algebra textbook.
Geometric Algebra For Computer Science by Dorst et al. (2007) [Amazon Link]
More focus on programming, which is nice, but a bit messy and complicated with lots of not always useful notation introduced, especially since this has been improved upon since the original 2007 publish date.
Note: in the book the authors give the impression that Geometric Algebra is slower than Quaternions (etc...). It actually should be almost the same exact code (i.e. don't write Geometric Algebra code by making a generic struct that can contain all possible types of k-vectors, just write one struct per k-vector type, as needed. This means writing one Bivector struct, and one Rotor struct which is a Scalar + Bivector to replace Quaternions).
Projective Geometric Algebra Illuminated by Lengyel (2024) [Amazon Link]
Projective Geometric Algebra allows to contain planes and lines as part of the algebra, and lets you translate elements using Geometric Algebra notation (in addition to rotating), at the complexity cost of adding a spatial dimension and other things. Personally I'm not sure the trade-off is worth it most of the time, but there are some cool things there. The book also often offers more modern, simpler and more general derivations of the concepts in Dorst et al.
[Aside] History
In 1773, Lagrange introduced the component form of both the dot and cross products in order to study the tetrahedron in three dimensions.
In 1844 Grassmann published The Theory of Linear Extension, which introduced the inner (dot), outer (wedge) product and n-vectors, as well as a lot of what we call linear algebra and vector analysis today.
Around the same time (1843), Hamilton introduced Quaternions, trying to generalize complex numbers from 2D to 3D. Hamilton wanted the imaginary part of quaternions to work like a point in space (a vector), even though it does not (it works like a bivector), and that created confusion to this day.
In 1856 Arthur Cayley introduced matrix multiplication and the inverse matrix (but methods for solving linear systems were first considered by Leibniz in 1693).
The dot and cross products were introduced as part of the operations on quaternions. Around 1881 Gibbs split them off from quaternions to build the vector analysis we still use today because he considered quaternion analysis too complicated and restrictive. Gibbs was aware of Grassmann's work and wanted to make it more useful for his own research.
In 1878 Clifford combined Grassmann’s n-vectors and quaternion algebra to make the geometric product. In 1886 Lipschitz generalized Clifford’s work to n-dimensions.
The 20th century and present has seen a revival of interest for and work in Geometric Algebra (notably by Hestenes), and work to present the subject in an easier to digest form.
Here are some good resources:
On the Evolution of Geometric Algebra and Geometric Calculus by D. Hestenes [Has a good history diagram!] [link]
A History of Vector Analysis by Michael J. Crowe, 2002 [link]
Quaternions: A History Of Complex Noncommutative Rotation Groups In Theoretical Physics by Johannes C. Familton, 2015 [link]
Hamilton, Rodrigues, and the Quaternion Scandal by Simon L. Altmann, 1989 [link]
Wikipedia: Geometric Algebra History [link]
Wikipedia: Quaternion History [link]
Credit
Made by Marc ten Bosch. If you enjoyed this video/article combo thing, you might consider donating on PayPal or Patreon.
