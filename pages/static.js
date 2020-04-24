import React, { Component } from 'react'
import Head from 'next/head'

import { name, authors } from '../site';

class Ssg extends Component {

  render() {
    const { posts } = this.props
    return (
      <main>
        <Head>
          <title>{name}</title>
        </Head>
        <div>This is a test for a static website</div>
      </main>
    )
  }
}

export default Ssg
