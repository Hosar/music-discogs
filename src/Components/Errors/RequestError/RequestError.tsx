import React, { Component } from 'react'

interface Props{}

interface State{
    hasError: boolean
}

export class RequestError extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: any){
        return { hasError: true }
    }

    componentDidCatch(error: any, info: any){
        console.log(error, info)
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}