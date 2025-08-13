## Binary Classification using Logistic Rgression - Dataset

- Will use `kaggle` dataset of cat.
- The dataset is in HDF5 (Hierarchical Data Format version 5) data format
- [h5py Documentation Link](https://docs.h5py.org/en/stable/quick.html)
- HDF5 format is designed for storing and managing large and complex datasets.
- HDF5 provides a flexible and efficient way to organize, store, and retrieve data.
- It supports various types of data, including numerical arrays, images, tables, and text.
- The h5py package is a Pythonic interface to the HDF5 binary data format.

### Fetch Dataset from Kaggle
- Import data from Kaggle
- Download the data from the link below:
  [Download Catvnocat Dataset](https://www.kaggle.com/datasets/muhammeddalkran/catvnoncat)
- Extract the zip file and keep that in a folder.  

**Details of datasets**
- Image size: 64x64
- Color space: RGB
- File format: h5
- Number of classes: 2 (cat, non-cat)
- Number of train images: 209
- Number of test images: 50

To represent color images, the red, green and blue channels (RGB) must be specified for each pixel, and so the pixel value is actually a vector of three numbers ranging from 0 to 255.

```js
import numpy as np
import h5py
import matplotlib.pyplot as plt
```
### Load Dataset

```js
# Loading the data (cat/non-cat) from the File downloaded from the Kaggle
train_dataset = h5py.File('/catvnoncat/train_catvnoncat.h5', "r")
test_dataset = h5py.File('/catvnoncat/test_catvnoncat.h5', "r")
```
 `h5py.File` acts like a Python dictionary, thus we can check the keys using `key()` method with list or `for loop`. [h5py Documentation Link](https://docs.h5py.org/en/stable/quick.html)

 ```js
 list(train_dataset.keys())
 ```

 ```js
#Names of the keys in HDF5 file
for key in train_dataset.keys():
  print(key)
```

```js
list(train_dataset["list_classes"])
```

```js
a=np.array(train_dataset["list_classes"])
print(a, a.dtype)
```
In NumPy, the `|S7` data type represents a fixed-length string of 7 characters. The S stands for string, and the number 7 indicates the length of the string. This data type is useful when you want to store and manipulate fixed-length strings in a NumPy array. Each element of the array will be a string of exactly 7 characters.

If you want to store a string of 4 characters in a NumPy array with the |S7 data type, you can do so by using a fixed-length string of length 7, where the remaining 3 characters are filled with spaces.

```js
train_dataset["train_set_x"]
```
In NumPy, the |u1 data type represents an unsigned 1-byte integer. The u stands for unsigned, indicating that the integers in this data type are non-negative (i.e., they do not have a sign). The 1 represents the number of bytes allocated for each integer.

Since it is an unsigned integer, the range of values for the |u1 data type is from 0 to 255 (2^8 - 1).

## Convert `h5py` Data into NumPy Data

```js
#train set features
train_set_x_orig = np.array(train_dataset["train_set_x"][:])

#train set labels
train_set_y = np.array(train_dataset["train_set_y"][:])
```
