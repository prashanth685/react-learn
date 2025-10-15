//they are 4 phases...

// mounting:when an instance of a componenet is being created and inserted into Dom.

//constructor,static getDerivedStatefromProps,render and ComponenetDidMount

//Updating:when a componenet is being re-rendered as a result of changes to either its props or state.

//static getDerivedStatefromProps,shouldCopmonentUpdate,render,getSnapshotBeforeUpdate and coponenetDidUpdate

//unmounting:when a component is being removed from the DOM.

//componentWillUnmount

//Error handling: when there is an error during rendering,in a lifecycle method, or in the constructor of any child componenet.

//static getDerivedStateFromError and copmonentDidCatch

{
  /*
    MOunting Lifecycle
    --- constructor(props)
    A special function that will get called whenever a new coponent is created
    * intialize state Binding the event handlers
    * Do not cause side effects. Ex:HTTP requests
    * super(props) directly overwrite this.state
    -- static getDerivedSytateFfromProps(props,state)
    * when the state of the component depends on changes in props over time.
    * set the state
    * do not cause side effects ex:HTTp requests
    --render()
    * only required method
    * read props and state and return JSX
    * Do not change state or interact with DOM or make ajax calls.
    --componentDidMount():
    * invoked immediately after a component and all its childern coponenets have been rendered tothe DOM.
    * Cause side effects. ex:interact with the DOM or perform any ajax calls to load data
     */
}

{
  /*
  --updating phase:
  * static getDerivedStateFromProps(props,state):Dictates if the component should re-render or not
  * should componentUpdate(nextProps,nextState):performance optimization
  * render()
  * get snapshotBeforeUpdate(prevProps,prevState)
  * componetDidUpdate(prevProps,prevState,snapshot)
  */
}

{
  /*
  componetWillUnmount():method is invoked immediately before a component is unmounted and destroyed,
  used for cancelling any network requests, removing event handlers,cancelling any subscriptions and also invalidating timers(settimeout,setinterval)
  do not call the setstate method
   */
}

{
  /* 
    error handling:
    static getDerivedStateFroError(errir)
    componenetDidCatch(error,info)
    when there is an error either during rendering, in a lifecycle method or in the constructoe of any child
    */
}
