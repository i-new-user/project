import request from 'supertest'
import {app} from '../src'
import { HTTP_STATUSES } from '../src/http_statuses'
import { videos } from '../src/db/db_videos'

describe('/videos', () => {
    beforeAll( async () => {
        await request(app)
                .get('/videos')
                .expect(HTTP_STATUSES.OK_200, [])
    })
})