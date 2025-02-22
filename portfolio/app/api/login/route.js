import DbConnection from "@/app/utils/config/DbConnection";
import User from "@/app/utils/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req) {
  try {
    DbConnection();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ emailError: 'Email not registered' });

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return NextResponse.json({ passwordError: 'Incorrect Password' });

    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000);
    user.otp = otp;
    user.otpExpiration = otpExpiration;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_GMAIL_USER,
        pass: process.env.NEXT_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_GMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp} to login`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: 'OTP send successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' });
  }
};