import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Injectable()
export class FaqService {
  // async favorite(id: number, slug: string): Promise<ArticleRO> {
  //   let article = await this.articleRepository.findOne({slug});
  //   const user = await this.userRepository.findOne(id);

  //   const isNewFavorite = user.favorites.findIndex(_article => _article.id === article.id) < 0;
  //   if (isNewFavorite) {
  //     user.favorites.push(article);
  //     article.favoriteCount++;

  //     await this.userRepository.save(user);
  //     article = await this.articleRepository.save(article);
  //   }

  //   return {article};
  // }

  // async unFavorite(id: number, slug: string): Promise<ArticleRO> {
  //   let article = await this.articleRepository.findOne({slug});
  //   const user = await this.userRepository.findOne(id);

  //   const deleteIndex = user.favorites.findIndex(_article => _article.id === article.id);

  //   if (deleteIndex >= 0) {

  //     user.favorites.splice(deleteIndex, 1);
  //     article.favoriteCount--;

  //     await this.userRepository.save(user);
  //     article = await this.articleRepository.save(article);
  //   }

  //   return {article};
  // }
  create(createFaqDto: CreateFaqDto) {
    return 'This action adds a new faq';
  }

  findAll() {
    return `This action returns all faq`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faq`;
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}
