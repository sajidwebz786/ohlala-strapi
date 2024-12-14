module.exports = ({ env }) => ({
    ckeditor: false,
    slugify: {
        enabled: true,
        shouldUpdateSlug: true,
        config: {
            shouldUpdateSlug: true,
            contentTypes: {
                post: {
                    field: 'slug',
                    references: 'title',
                },
                'post-category': {
                    field: 'slug',
                    references: 'title',
                },
                product: {
                    field: 'slug',
                    references: 'title',
                },
                'product-collection': {
                    field: 'slug',
                    references: 'title',
                },
                'product-category': {
                    field: 'slug',
                    references: 'title',
                },
                'product-brand': {
                    field: 'slug',
                    references: 'title',
                },
                'product-variant': {
                    field: 'slug',
                    references: 'title',
                },
                'product-store': {
                    field: 'slug',
                    references: 'title',
                },
                banner: {
                    field: 'slug',
                    references: 'name',
                },
            },
        },
    },
    ezforms: {
        config: {
            captchaProvider: {
                name: 'none',
            },
            notificationProviders: [],
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_CLOUD_NAME'),
                api_key: env('CLOUDINARY_API_KEY'),
                api_secret: env('CLOUDINARY_API_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});
