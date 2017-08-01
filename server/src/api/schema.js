// @flow

import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const gql = schema => schema

export const typeDefs = gql`
    type Achievement {
        _id: String,
        name: String,
        description: String,
        sortOrder: Int,
        targetValue: Float,
        value: Float,
        isCollected: Boolean
    }
    type Course {
        _id: String,
        name: String,
        color: String
    }
    type Lesson {
        _id: String,
        position: Int,
        description: String,
        flashcardIds: [String]!,
        youtubeId: String,
    }
    type LessonCount {
        count: Int
    }
    type Image {
      url: String,
      hasAlpha: Boolean,
    }
    type Flashcard {
        _id: String,
        question: String!,
        answer: String!,
        image: FlashcardImage,
    }
    type FlashcardImage {
        url: String,
        hasAlpha: Boolean,
    }
    type Item {
        _id: String,
        actualTimesRepeated: Int,
        easinessFactor: Float,
        extraRepeatToday: Boolean,
        flashcardId: String,
        lastRepetition: Int,
        nextRepetition: Int,
        previousDaysChange: Int,
        timesRepeated: Int
    }
    
    type ItemWithFlashcard {
        item: Item!,
        flashcard: Flashcard!
    }

    type UserDetails {
        hasDisabledTutorial: Boolean,
        selectedCourse: String
    }
    
    type User {
        _id: String!,
        password: String!,
        username: String!,
        activated: Boolean!
    }
    
    type SessionCount {
        newDone: Int,
        newTotal: Int,
        dueDone: Int,
        dueTotal: Int,
        reviewDone: Int,
        reviewTotal: Int
    }
    
    type ReviewsPerDay {
      count: Int,
      ts: Int,
    }

    type Query {
        Achievements: [Achievement]!,
        Reviews: [ReviewsPerDay],
        Courses: [Course]!,
        Course(_id: String!): Course,
        Lessons(courseId: String!): [Lesson]!,
        Lesson(courseId: String!): Lesson,
        Flashcards: [Flashcard],        
        Flashcard(_id: String!): Flashcard
        Item: Item,
        ItemsWithFlashcard: [ItemWithFlashcard]!
        SessionCount: SessionCount
        LessonCount: LessonCount
        CurrentUser: User,
        UserDetails: UserDetails
    }
    
    type Status {
        success: Boolean!
    }
    
    type Mutation {
        changePassword(oldPassword: String!, newPassword: String!): Status,
        selectCourse(courseId: String!): Status,
        closeCourse: Status,
        createItemsAndMarkLessonAsWatched(courseId: String!): Lesson,
        processEvaluation(itemId: String!, evaluation: Int!): [ItemWithFlashcard]!,
        addUser: User!
        setUsernameAndPasswordForGuest(username: String!, password: String!): User
        logIn(username: String!, password: String!): User
        logInWithFacebook(accessToken: String!): User
        logOut: User
        hideTutorial: UserDetails
        resetPassword(username: String!): Status
    }
    
    schema {
        query: Query
        mutation: Mutation
        #        subscription: Subscription
    }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
