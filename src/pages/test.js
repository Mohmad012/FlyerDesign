import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
const dataProducts = [
  {
    page: {
      pageNumber: 1,
      headerBg: 'https://picsum.photos/400/300?4',
      headerSize: '5%',
      body: [
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
      ],
      footerBg: 'https://picsum.photos/400/300?5',
      footerSize: '20%',
    },
  },
  {
    page: {
      headerBg: 'https://picsum.photos/400/300?4',
      headerSize: '5%',
      body: [
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
      ],
      footerBg: 'https://picsum.photos/400/300?5',
      footerSize: '20%',
    },
  },
  {
    page: {
      headerBg: 'https://picsum.photos/400/300?4',
      headerSize: '5%',
      body: [
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
        {
          id: 1,
          title: 'Card 1',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?1',
          imageAlt: 'Card 1 image',
        },
        {
          id: 2,
          title: 'Card 2',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?2',
          imageAlt: 'Card 2 image',
        },
        {
          id: 3,
          title: 'Card 3',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?3',
          imageAlt: 'Card 3 image',
        },
        {
          id: 4,
          title: 'Card 4',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?4',
          imageAlt: 'Card 4 image',
        },
        {
          id: 5,
          title: 'Card 5',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?5',
          imageAlt: 'Card 5 image',
        },
        {
          id: 6,
          title: 'Card 6',
          priceAfterRival: '100$',
          priceBeforeRival: '200$',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
          imageUrl: 'https://picsum.photos/400/300?6',
          imageAlt: 'Card 6 image',
        },
      ],
      footerBg: 'https://picsum.photos/400/300?5',
      footerSize: '20%',
    },
  },
]

const Popup = ({setIsPopupOpen, onAddToCart, onBuyFast, currPopupData}) => {
  return (
    <div
      className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'
      onClick={() => setIsPopupOpen(false)}>
      <div
        className='bg-white rounded-lg  h-72 flex'
        onClick={e => e.stopPropagation()}>
        <div className='w-1/2 p-4 flex flex-col justify-center'>
          <div className=' overflow-hidden h-full w-full'>
            <h2 className='text-lg font-medium text-sky-500'>
              {currPopupData?.title}
            </h2>
            <div className='flex items-center gap-2'>
              <span className='text-sm line-through'>
                {currPopupData?.priceBeforeRival}
              </span>
              <h2 className='text-lg font-bold text-sky-500'>
                {currPopupData?.priceAfterRival}
              </h2>
            </div>
            <p className='mt-2 text-gray-600 text-sm'>
              {currPopupData?.description}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white w-40 mx-auto font-bold py-2 px-4 rounded'
              onClick={onAddToCart}>
              Add To Cart
            </button>
            <button
              className='text-blue-500 bg-transparent ring-1 ring-blue-500 hover:bg-blue-500 hover:text-white w-40 mx-auto font-bold py-2 px-4 rounded'
              onClick={onBuyFast}>
              Buy Fast
            </button>
          </div>
        </div>
        <div
          className='h-full w-1/2 bg-cover rounded-tl-lg rounded-bl-lg bg-center'
          style={{backgroundImage: `url(${currPopupData?.imageUrl})`}}
        />
      </div>
    </div>
  )
}

function PageHeader({height, src}) {
  return (
    <div
      className={`flex justify-center items-center w-full`}
      style={{
        height,
      }}>
      <Image
        src={src}
        alt='Footer image'
        width={200}
        height={200}
        className='object-cover h-full w-full'
      />
    </div>
  )
}

function Card({
  imageUrl,
  imageAlt,
  priceAfterRival,
  priceBeforeRival,
  description,
  handleClickOnImage,
  width = 'sm:w-1/3',
  id,
}) {
  return (
    <>
      {priceAfterRival || priceBeforeRival || description ? (
        <div className={`p-1 ${width} flex gap-5 mb-10 cursor-pointer`}>
          <div
            className='relative shadow-md h-full w-full'
            onClick={() =>
              handleClickOnImage({
                imageUrl,
                imageAlt,
                priceAfterRival,
                priceBeforeRival,
                description,
                id,
              })
            }>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={400}
              height={200}
              className='w-full'
            />
          </div>
          <div className=' overflow-hidden h-full w-full'>
            <h2 className='text-lg font-medium text-sky-500'>
              {priceAfterRival}
            </h2>
            <span className='text-sm line-through'>{priceBeforeRival}</span>
            <p className='mt-2 text-gray-600 text-sm'>{description}</p>
          </div>
        </div>
      ) : (
        <div className={`p-1 ${width} cursor-pointer`}>
          <div
            className='relative shadow-md '
            onClick={() =>
              handleClickOnImage({
                imageUrl,
                imageAlt,
                priceAfterRival,
                priceBeforeRival,
                description,
                id,
              })
            }>
            <Image src={imageUrl} alt={imageAlt} width={400} height={200} />
          </div>
        </div>
      )}
    </>
  )
}

function PageFooter({height, src}) {
  return (
    <div
      className={`flex justify-center items-center w-full`}
      style={{
        height,
      }}>
      <Image
        src={src}
        alt='Footer image'
        width={200}
        height={200}
        className='object-cover h-full w-full'
      />
    </div>
  )
}

function PageBody({data, handleClickOnImage}) {
  return (
    <div>
      <div className='container mx-auto '>
        <div className='flex flex-wrap '>
          {data?.map((item, key) => (
            <Card
              key={key}
              imageUrl={item?.imageUrl}
              imageAlt={item?.imageAlt}
              id={item?.id}
              handleClickOnImage={handleClickOnImage}
              width='w-1/4'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Page = React.forwardRef((props, ref) => {
  return (
    <div className='page h-full' ref={ref}>
      <div className=' flex flex-col h-full justify-between '>
        <PageHeader height={props?.headerHeight} src={props?.srcHeaderBg} />
        <PageBody
          data={props?.data}
          handleClickOnImage={props?.handleClickOnImage}
        />
        <PageFooter height={props?.footerHeight} src={props?.srcFooterBg} />
      </div>
    </div>
  )
})
Page.displayName = 'Page'

const Sidebar = ({data, handleClickOnImage}) => {
  return (
    <div
      className={`w-1/3 px-4 pb-10 overflow-hidden  relative shadow-2xl fixed top-0 right-0 max-h-screen`}>
      <h1 className='text-lg font-bold  mx-6'>Title Of Products</h1>
      <div
        className={`flex flex-col w-full  overflow-y-auto   w-1/3 overflow-y-auto    p-4  h-full rounded-tr-lg rounded-br-lg`}>
        {data?.map((item, key) => (
          <Card
            key={key}
            width='w-full'
            priceAfterRival={item?.priceAfterRival}
            priceBeforeRival={item?.priceAfterRival}
            description={item?.description}
            imageUrl={item?.imageUrl}
            imageAlt={item?.imageAlt}
            id={item?.id}
            handleClickOnImage={handleClickOnImage}
          />
        ))}
      </div>
    </div>
  )
}

const Test = () => {
  const flipBookRef = useRef(null)
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  // const [data, setData] = useState([...dataProducts])

  useEffect(() => {
    setTotalPage(flipBookRef?.current?.pageFlip()?.getPageCount())
  }, [flipBookRef?.current?.pageFlip()?.getCurrentPageIndex()])

  const nextButtonClick = () => {
    flipBookRef?.current?.pageFlip()?.flipNext()
    setPage(flipBookRef?.current?.pageFlip()?.getCurrentPageIndex())
  }

  const prevButtonClick = () => {
    flipBookRef?.current?.pageFlip()?.flipPrev()
    setPage(flipBookRef?.current?.pageFlip()?.getCurrentPageIndex())
  }

  const onPage = e => {
    setPage(e.data)
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currPopupData, setCurrPopupData] = useState({})

  const handleAddToCart = () => {
    // console.log('Add to cart clicked')
  }

  const handleBuyFast = () => {
    // console.log('Save clicked')
  }

  const handleClickOnImage = ({id}) => {
    const dataProductsClone = structuredClone(dataProducts)
    const newObj = dataProductsClone.filter(item =>
      item.page.body.find(itemF => itemF.id === id)
    )

    // console.log('you click on imageAlt', imageAlt)
    setCurrPopupData(newObj[0]?.page?.body?.find(item => item?.id == id))
    setIsPopupOpen(true)
  }

  return (
    <>
      <div className='h-screen relative transform flex justify-around w-full max-w-full md:max-w-full rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
        <Sidebar
          handleClickOnImage={handleClickOnImage}
          data={dataProducts
            .slice(
              flipBookRef?.current?.pageFlip()?.getCurrentPageIndex(),
              flipBookRef?.current?.pageFlip()?.getCurrentPageIndex() + 2
            )
            .map(item => item.page.body)
            .flat()}
        />
        <div className={` px-10 w-full h-full flex flex-col`}>
          <HTMLFlipBook
            width={800}
            height={1200}
            size='stretch'
            maxShadowOpacity={0.5}
            // showCover={true}
            usePortrait={false}
            useMouseEvents={false}
            mobileScrollSupport={true}
            onFlip={onPage}
            className={`demo-book h-screen w-full`}
            ref={flipBookRef}>
            {dataProducts?.map((item, key) => (
              <Page
                data={item?.page?.body}
                footerHeight={item?.page?.footerSize}
                headerHeight={item?.page?.headerSize}
                number={key}
                srcHeaderBg={item?.page?.headerBg}
                srcFooterBg={item?.page?.footerBg}
                handleClickOnImage={handleClickOnImage}
                key={key}>
                Lorem ipsum...
              </Page>
            ))}
          </HTMLFlipBook>

          <div className='container mx-auto my-4 '>
            <div className='flex items-center justify-center gap-5'>
              <button
                type='button'
                onClick={nextButtonClick}
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                Next page
              </button>
              <span className='mx-2'>
                [<span className='mx-1'>{page + 1}</span>
                <span className='mx-2'>of</span>
                <span className='mx-1'>{totalPage}</span>]
              </span>
              <button
                type='button'
                onClick={prevButtonClick}
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                Previous page
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Popup
          onAddToCart={handleAddToCart}
          onBuyFast={handleBuyFast}
          setIsPopupOpen={setIsPopupOpen}
          currPopupData={currPopupData}
        />
      )}
    </>
  )
}

export default Test
