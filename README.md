# UseReducerTest

The purpose of the app is to test the combination of useReducer hook and Context as opposed to React Redux. The idea is that changes in reducer are watched and dispatched centrally by the Context.

This pattern is supposed to be designated for smaller to medium apps which need a central store consumed in different parts independent of each other.

The inspiration and some specific techniques were drawn from [this post by Harry Wolff](https://hswolff.com/blog/how-to-usecontext-with-usereducer/).