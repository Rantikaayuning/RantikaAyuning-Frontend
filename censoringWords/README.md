## 2. Censoring Words

Censors these words: dolor, elit, quis, nisi, fugiat, proident, laborum; of this paragraph.

```
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

The output should be

```
Lorem ipsum ***** sit amet, consectetur adipisicing ****, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, **** nostrud exercitation ullamco laboris **** ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ****** nulla pariatur.
Excepteur sint occaecat cupidatat non ******** sunt in culpa qui officia deserunt mollit anim id est *******.
```