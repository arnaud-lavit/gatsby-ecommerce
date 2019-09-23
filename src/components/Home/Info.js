import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sapiente totam quasi distinctio quos. Quae quam illum asperiores tempora. Sapiente pariatur possimus obcaecati corporis, voluptatibus quae molestias! Perferendis eveniet earum quis rerum provident numquam nobis suscipit corporis architecto est eum, nulla mollitia repellendus recusandae quaerat magni voluptas quo, explicabo quam!
            </p>
            <Link to ="/about">
              <button className="btn text-uppercase btn-yellow"> about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
