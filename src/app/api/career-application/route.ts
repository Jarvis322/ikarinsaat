import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Form verilerini al
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const cv = formData.get('cv') as File;

    // Form validasyonu
    if (!name || !email || !phone || !position || !cv) {
      return NextResponse.json(
        { error: 'Tüm alanların doldurulması zorunludur.' },
        { status: 400 }
      );
    }

    // CV dosyasını buffer'a çevir
    const bytes = await cv.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // E-posta gönderimi için transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta gönder
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Yeni İş Başvurusu - ${position}`,
      html: `
        <h2>Yeni İş Başvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Pozisyon:</strong> ${position}</p>
      `,
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json(
      { message: 'Başvurunuz başarıyla alındı.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Başvuru gönderilirken hata:', error);
    return NextResponse.json(
      { error: 'Başvuru işlenirken bir hata oluştu.' },
      { status: 500 }
    );
  }
} 