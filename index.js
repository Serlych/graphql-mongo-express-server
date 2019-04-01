import express from 'express'
import expressGraphQL from 'express-graphql'
import { connect } from 'mongoose'
import { json } from 'body-parser'
import cors from 'cors'

import defaultSchema from './graphql/index'

const app = express()
const port = process.env.PORT || '4000'
const db = 'mongodb://root:root123@ds135680.mlab.com:35680/graphql-users'

connect(db, { useCreateIndex: true, useNewUrlParser: true })
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err))

app.use('/api', cors(), json(), expressGraphQL({
  schema: defaultSchema, graphiql: true
}))

app.listen(port, () => console.log(`Server running on port ${port}`))