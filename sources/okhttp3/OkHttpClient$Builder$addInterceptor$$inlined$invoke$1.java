package okhttp3;

import kotlin.C4789l;
import kotlin.jvm.internal.C10202j;
import kotlin.p215c0.p216c.C9113l;
import okhttp3.Interceptor;

@C4789l(mo16639bv = {1, 0, 3}, mo16640d1 = {"\u0000\u0017\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016¨\u0006\u0006¸\u0006\u0000"}, mo16641d2 = {"okhttp3/Interceptor$Companion$invoke$1", "Lokhttp3/Interceptor;", "intercept", "Lokhttp3/Response;", "chain", "Lokhttp3/Interceptor$Chain;", "okhttp"}, mo16642k = 1, mo16643mv = {1, 1, 15})
/* compiled from: Interceptor.kt */
public final class OkHttpClient$Builder$addInterceptor$$inlined$invoke$1 implements Interceptor {
    final /* synthetic */ C9113l $block$inlined;

    public OkHttpClient$Builder$addInterceptor$$inlined$invoke$1(C9113l lVar) {
        this.$block$inlined = lVar;
    }

    public Response intercept(Interceptor.Chain chain) {
        C10202j.m34178b(chain, "chain");
        return (Response) this.$block$inlined.invoke(chain);
    }
}
