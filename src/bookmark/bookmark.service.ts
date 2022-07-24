import { Injectable } from '@nestjs/common';
import { Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookmarksDto } from './dto/bookmarks.dto';

@Injectable()
export class BookmarkService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserBookmarks(userId: number): Promise<Bookmark[]> {
    const bookmarks = await this.prisma.bookmark.findMany({
      where: {
        userId: userId,
      },
    });

    return bookmarks;
  }

  async createBookmark(body: BookmarksDto, userId: number): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        title: body.title,
        description: body.description,
        link: body.link,
        userId: userId,
      },
    });

    return bookmark;
  }

  async updateBookmark(
    body: BookmarksDto,
    bookmarkId: number,
  ): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        title: body.title,
        description: body.description,
        link: body.link,
      },
    });

    return bookmark;
  }
}
