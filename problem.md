##problem##

fatal: unable to access 'https://github.com/****.git/': Couldn't resolve host 'github.com'


**solution:**

    git config --global --unset https.proxy
    git config --global --unset http.proxy