import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        photoURL: v.string(),
        credits: v.number()
    }),
    videoData: defineTable({
        title: v.string(),
        topic: v.string(),
        script: v.string(),
        videoStyle: v.string(),
        voice: v.string(),
        caption: v.any(),
        images: v.optional(v.any()),
        audioUrl: v.optional(v.string()),
        captionJson: v.optional(v.string()),
        uid: v.string(v.id('users')),
        createdBy: v.string()
    })
})

